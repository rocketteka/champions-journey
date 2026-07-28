#!/usr/bin/env node
/**
 * Creates Firebase Auth + Firestore test users for Champion's Journey.
 * Reads credentials from `.env` (see `.env.example`).
 *
 * Usage: node scripts/seed-test-accounts.mjs
 */
import { readFileSync, existsSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  const path = resolve(root, '.env');
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)$/);
    if (!m) continue;
    let v = m[2].trim();
    if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'"))) {
      v = v.slice(1, -1);
    }
    if (process.env[m[1]] === undefined) process.env[m[1]] = v;
  }
}

loadEnv();

const API_KEY = process.env.VITE_FIREBASE_API_KEY || '';
const PROJECT_ID = process.env.VITE_FIREBASE_PROJECT_ID || '';
const PASSWORD = process.env.CJ_TEST_PASSWORD || 'TestCJ2026!';

if (!API_KEY || !PROJECT_ID) {
  console.error('Missing VITE_FIREBASE_API_KEY or VITE_FIREBASE_PROJECT_ID.');
  console.error('Copy .env.example → .env and paste your Firebase web config.');
  console.error('See docs/FIREBASE_SETUP.md');
  process.exit(1);
}

const ACCOUNTS = [
  { email: 'student@championsjourney.test', role: 'student', name: 'Тест Ученик', level: 'beginner', track: 'fund', points: 120, plan: 'course' },
  { email: 'teacher@championsjourney.test', role: 'teacher', name: 'Тест Учитель', points: 0, plan: 'teacher' },
  { email: 'parent@championsjourney.test', role: 'parent', name: 'Тест Родитель', points: 0, plan: 'course' },
  { email: 'admin@championsjourney.test', role: 'admin', name: 'Тест Супер-админ', points: 0, plan: 'school' },
];

function fundTrack() {
  return {
    id: 'fund',
    name: { ru: 'Основы', kk: 'Негіздер', en: 'Fundamentals' },
    color: '#58CC02',
    chapters: [{
      id: 'w1',
      title: { ru: 'Первая неделя', kk: 'Бірінші апта', en: 'Week 1' },
      icon: 'robot',
      lessons: [
        { id: 'w1l1', title: { ru: 'Введение в робототехнику', kk: 'Робототехникаға кіріспе', en: 'Intro to Robotics' }, link: 'https://canva.link/0ikaa1ax4mvgjms', min: 30, done: true },
        { id: 'w1l2', title: { ru: 'Сборка робота', kk: 'Робот құрастыру', en: 'Building Robot' }, link: 'https://canva.link/4tt40eb4an1zazp', min: 60, done: false },
      ],
    }],
  };
}

function makeState(ac) {
  const user = { name: ac.name, role: ac.role };
  if (ac.role === 'student') {
    user.level = ac.level || 'beginner';
    user.track = ac.track || 'fund';
  }
  return {
    user,
    lang: 'ru',
    points: ac.points || 0,
    friendsOn: false,
    plan: ac.plan || 'course',
    tracks: [fundTrack(), { id: 'olymp', locked: true, name: { ru: 'Олимпиадная робототехника', kk: 'Олимпиадалық робототехника', en: 'Olympiad Robotics' }, color: '#46A302', programs: ['FLL Challenge', 'FTC', 'WRO'], chapters: [] }],
    posts: [],
    lessons: [],
    competitions: [],
    pupils: ac.role === 'teacher' || ac.role === 'admin' ? [
      { id: 'u1', parent: 'Айгерим Н.', child: 'Алишер', school: 'НИШ Астана', group: 'Основы', attended: 5, missed: 0, covered: ['Intro to Robotics'], plan: { ru: 'Месяц', kk: 'Ай', en: 'Monthly' }, paid: true, amount: 35000, date: '2026-06-28', method: 'Kaspi' },
    ] : [],
    materials: ac.role === 'teacher' || ac.role === 'admin' ? [
      { id: 'm1', title: { ru: 'FLL Challenge — правила сезона.pdf', kk: 'FLL Challenge', en: 'FLL rules.pdf' }, cat: 'fll', type: 'doc', fileName: 'fll_rules.pdf', dataUrl: null },
    ] : [],
    achievements: [
      { id: 'a1', em: '👟', title: { ru: 'Первые шаги', kk: 'Алғашқы қадам', en: 'First steps' }, pts: 10, on: ac.role === 'student', cond: 'lesson1' },
    ],
    coach: [{ from: 'ai', text: 'Привет! Я Coach AI. Помогу с робототехникой, FIRST и WRO.' }],
  };
}

function toFirestoreValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === 'string') return { stringValue: v };
  if (typeof v === 'boolean') return { booleanValue: v };
  if (typeof v === 'number') return Number.isInteger(v) ? { integerValue: String(v) } : { doubleValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(toFirestoreValue) } };
  if (typeof v === 'object') {
    const fields = {};
    for (const [k, val] of Object.entries(v)) fields[k] = toFirestoreValue(val);
    return { mapValue: { fields } };
  }
  return { stringValue: String(v) };
}

async function signUpOrSignIn(email, password) {
  const signUp = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password, returnSecureToken: true }),
  });
  const data = await signUp.json();
  if (data.idToken) return data;

  if (data.error?.message === 'EMAIL_EXISTS') {
    const signIn = await fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, returnSecureToken: true }),
    });
    const inData = await signIn.json();
    if (inData.idToken) return inData;
    throw new Error(inData.error?.message || 'signIn failed');
  }
  throw new Error(data.error?.message || 'signUp failed');
}

async function saveFirestore(uid, idToken, state) {
  const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/users/${uid}`;
  const body = {
    fields: {
      updated: { integerValue: String(Date.now()) },
      state: toFirestoreValue(state),
    },
  };
  const res = await fetch(url, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${idToken}`,
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data));
  return data;
}

async function main() {
  console.log(`Seeding project: ${PROJECT_ID}`);
  const results = [];
  for (const ac of ACCOUNTS) {
    process.stdout.write(`Creating ${ac.email} (${ac.role})... `);
    try {
      const auth = await signUpOrSignIn(ac.email, PASSWORD);
      const state = makeState(ac);
      await saveFirestore(auth.localId, auth.idToken, state);
      results.push({ ok: true, ...ac, uid: auth.localId });
      console.log('OK');
    } catch (e) {
      results.push({ ok: false, ...ac, error: e.message });
      console.log('FAIL:', e.message);
    }
  }

  console.log('\n--- Test accounts ---');
  console.log('Password for all:', PASSWORD);
  console.log('');
  for (const r of results) {
    const roleLabel = { student: 'Ученик', teacher: 'Учитель', parent: 'Родитель', admin: 'Супер-админ (admin)' }[r.role];
    console.log(`${roleLabel}:`);
    console.log(`  Email: ${r.email}`);
    if (r.ok) console.log(`  UID:   ${r.uid}`);
    else console.log(`  Error: ${r.error}`);
    console.log('');
  }

  if (results.some((r) => !r.ok)) process.exit(1);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
