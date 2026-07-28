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

const firebaseConfig = {
  apiKey: 'AIzaSyD5LZx2rNhoVZ1mLchT8I6jf-NXghLXB00',
  authDomain: 'championsjourney-8dd9a.firebaseapp.com',
  projectId: 'championsjourney-8dd9a',
  storageBucket: 'championsjourney-8dd9a.firebasestorage.app',
  messagingSenderId: '1042507862137',
  appId: '1:1042507862137:web:01bc0257d6a66a46c284a8',
};

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
    if (!firebaseConfig.apiKey || firebaseConfig.apiKey.startsWith('PASTE')) {
      onReady?.();
      return;
    }
    const app: FirebaseApp = initializeApp(firebaseConfig);
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
