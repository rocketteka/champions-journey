import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
import type { AppState } from './types';

/** Web config from `.env` (see `.env.example` and docs/FIREBASE_SETUP.md). */
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY as string | undefined,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN as string | undefined,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID as string | undefined,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET as string | undefined,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID as string | undefined,
  appId: import.meta.env.VITE_FIREBASE_APP_ID as string | undefined,
};

function isConfigured(): boolean {
  const key = firebaseConfig.apiKey?.trim();
  return Boolean(key && !key.startsWith('PASTE') && firebaseConfig.projectId);
}

export interface CloudApi {
  onAuth: (cb: (user: User | null) => void) => void;
  signIn: (email: string, pass: string) => Promise<unknown>;
  signUp: (email: string, pass: string) => Promise<unknown>;
  signOut: () => Promise<void>;
  load: (uid: string) => Promise<AppState | null>;
  save: (uid: string, state: AppState) => Promise<void>;
}

let cloud: CloudApi | null = null;
let booted = false;

export function getCloud(): CloudApi | null {
  return cloud;
}

export function initFirebase(onReady?: () => void): void {
  if (cloud || booted) {
    onReady?.();
    return;
  }
  booted = true;
  try {
    if (!isConfigured()) {
      console.warn(
        'Firebase: missing VITE_FIREBASE_* in .env — cloud auth/sync disabled. See docs/FIREBASE_SETUP.md',
      );
      onReady?.();
      return;
    }
    const app: FirebaseApp = initializeApp(firebaseConfig as Required<typeof firebaseConfig>);
    const auth = getAuth(app);
    const db = getFirestore(app);
    cloud = {
      onAuth: (cb) => onAuthStateChanged(auth, cb),
      signIn: (e, p) => signInWithEmailAndPassword(auth, e, p),
      signUp: (e, p) => createUserWithEmailAndPassword(auth, e, p),
      signOut: () => signOut(auth),
      load: async (uid) => {
        const s = await getDoc(doc(db, 'users', uid));
        return s.exists() ? (s.data().state as AppState) : null;
      },
      // JSON round-trip strips undefined values, which Firestore rejects
      save: (uid, state) => setDoc(doc(db, 'users', uid), {
        state: JSON.parse(JSON.stringify(state)) as AppState,
        updated: Date.now(),
      }),
    };
    window.CJ_CLOUD = cloud;
  } catch (e) {
    console.warn('Firebase init skipped:', e);
  }
  window.dispatchEvent(new Event('cj-cloud-ready'));
  onReady?.();
}
