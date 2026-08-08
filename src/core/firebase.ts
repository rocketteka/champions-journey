import { initializeApp, type FirebaseApp } from 'firebase/app';
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  addDoc,
  collection,
  getDocs,
  type Firestore,
} from 'firebase/firestore';
import type { AppState } from './types';
import { randomStudentId } from './auth-ids';

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

export interface StudentLink {
  code: string;
  studentName: string;
  crmStudentId: string;
  teacherUid: string;
  parentUid?: string | null;
  studentUid?: string | null;
  parentName?: string | null;
  parentPhone?: string | null;
  createdAt?: number;
  updatedAt?: number;
}

export type ApplicationStatus = 'new' | 'contacted' | 'enrolled' | 'rejected';

export interface EnrollmentApplication {
  id?: string;
  source: 'land_cta';
  status: ApplicationStatus;
  studentName: string;
  studentAge?: string;
  parentName: string;
  parentPhone: string;
  city?: string;
  track?: string;
  note?: string;
  createdAt: number;
  updatedAt?: number;
}

export interface CloudApi {
  onAuth: (cb: (user: User | null) => void) => void;
  signIn: (email: string, pass: string) => Promise<{ user: User }>;
  signUp: (email: string, pass: string) => Promise<{ user: User }>;
  signOut: () => Promise<void>;
  load: (uid: string) => Promise<AppState | null>;
  save: (uid: string, state: AppState) => Promise<void>;
  allocateStudentId: () => Promise<string>;
  publishStudentLink: (link: Omit<StudentLink, 'createdAt' | 'updatedAt'> & { code: string }) => Promise<void>;
  getStudentLink: (code: string) => Promise<StudentLink | null>;
  claimStudentLinkAsParent: (code: string, data: { parentUid: string; parentName: string; parentPhone: string }) => Promise<StudentLink>;
  claimStudentLinkAsStudent: (code: string, data: { studentUid: string; studentName: string }) => Promise<StudentLink>;
  submitApplication: (data: Omit<EnrollmentApplication, 'id' | 'source' | 'status' | 'createdAt' | 'updatedAt'>) => Promise<string>;
  listApplications: () => Promise<EnrollmentApplication[]>;
  updateApplicationStatus: (id: string, status: ApplicationStatus) => Promise<void>;
}

let cloud: CloudApi | null = null;
let booted = false;
let dbRef: Firestore | null = null;

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
    dbRef = db;
    cloud = {
      onAuth: (cb) => onAuthStateChanged(auth, cb),
      signIn: (e, p) => signInWithEmailAndPassword(auth, e, p) as Promise<{ user: User }>,
      signUp: (e, p) => createUserWithEmailAndPassword(auth, e, p) as Promise<{ user: User }>,
      signOut: () => signOut(auth),
      load: async (uid) => {
        const s = await getDoc(doc(db, 'users', uid));
        if (!s.exists()) return null;
        const data = s.data() || {};
        const state = data.state as AppState | null;
        if (!state) return null;
        // Sync meta (stripped on save) — used to avoid stale localStorage overwriting cloud
        (state as AppState & { _cloudUpdated?: number })._cloudUpdated =
          typeof data.updated === 'number' ? data.updated : 0;
        return state;
      },
      // JSON round-trip strips undefined values, which Firestore rejects
      save: async (uid, state) => {
        const updated = Date.now();
        const clone = JSON.parse(JSON.stringify(state)) as AppState & {
          _cloudUpdated?: number;
          _localUpdated?: number;
        };
        delete clone._cloudUpdated;
        delete clone._localUpdated;
        await setDoc(doc(db, 'users', uid), { state: clone, updated });
        (state as AppState & { _cloudUpdated?: number })._cloudUpdated = updated;
      },
      allocateStudentId: async () => {
        for (let i = 0; i < 50; i++) {
          const code = randomStudentId();
          const snap = await getDoc(doc(db, 'studentLinks', code));
          if (!snap.exists()) return code;
        }
        throw new Error('Could not allocate student ID');
      },
      publishStudentLink: async (link) => {
        const now = Date.now();
        await setDoc(doc(db, 'studentLinks', link.code), {
          ...link,
          parentUid: link.parentUid ?? null,
          studentUid: link.studentUid ?? null,
          parentName: link.parentName ?? null,
          parentPhone: link.parentPhone ?? null,
          createdAt: now,
          updatedAt: now,
        });
      },
      getStudentLink: async (code) => {
        const snap = await getDoc(doc(db, 'studentLinks', code));
        return snap.exists() ? ({ code, ...(snap.data() as Omit<StudentLink, 'code'>) }) : null;
      },
      claimStudentLinkAsParent: async (code, data) => {
        const ref = doc(db, 'studentLinks', code);
        const snap = await getDoc(ref);
        if (!snap.exists()) throw new Error('STUDENT_ID_NOT_FOUND');
        const cur = snap.data() as StudentLink;
        if (cur.parentUid && cur.parentUid !== data.parentUid) throw new Error('PARENT_ALREADY_LINKED');
        await updateDoc(ref, {
          parentUid: data.parentUid,
          parentName: data.parentName,
          parentPhone: data.parentPhone,
          updatedAt: Date.now(),
        });
        return { ...cur, code, ...data };
      },
      claimStudentLinkAsStudent: async (code, data) => {
        const ref = doc(db, 'studentLinks', code);
        const snap = await getDoc(ref);
        if (!snap.exists()) throw new Error('STUDENT_ID_NOT_FOUND');
        const cur = snap.data() as StudentLink;
        if (cur.studentUid && cur.studentUid !== data.studentUid) throw new Error('STUDENT_ALREADY_LINKED');
        await updateDoc(ref, {
          studentUid: data.studentUid,
          studentName: data.studentName || cur.studentName,
          updatedAt: Date.now(),
        });
        return { ...cur, code, studentUid: data.studentUid, studentName: data.studentName || cur.studentName };
      },
      submitApplication: async (data) => {
        const now = Date.now();
        const ref = await addDoc(collection(db, 'applications'), {
          source: 'land_cta',
          status: 'new',
          studentName: String(data.studentName || '').trim().slice(0, 80),
          studentAge: String(data.studentAge || '').trim().slice(0, 10),
          parentName: String(data.parentName || '').trim().slice(0, 80),
          parentPhone: String(data.parentPhone || '').trim().slice(0, 32),
          city: String(data.city || '').trim().slice(0, 60),
          track: String(data.track || '').trim().slice(0, 60),
          note: String(data.note || '').trim().slice(0, 500),
          createdAt: now,
          updatedAt: now,
        });
        return ref.id;
      },
      listApplications: async () => {
        const snap = await getDocs(collection(db, 'applications'));
        return snap.docs
          .map((d) => ({ id: d.id, ...(d.data() as Omit<EnrollmentApplication, 'id'>) }))
          .sort((a, b) => (b.createdAt || 0) - (a.createdAt || 0));
      },
      updateApplicationStatus: async (id, status) => {
        await updateDoc(doc(db, 'applications', id), { status, updatedAt: Date.now() });
      },
    };
    window.CJ_CLOUD = cloud;
  } catch (e) {
    console.warn('Firebase init skipped:', e);
  }
  window.dispatchEvent(new Event('cj-cloud-ready'));
  onReady?.();
}

export function getDb(): Firestore | null {
  return dbRef;
}
