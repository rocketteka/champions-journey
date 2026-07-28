#!/usr/bin/env node
/**
 * Writes informational `_meta/schema` after you sign in as any user.
 * Prefer deploying firestore.rules via Firebase CLI; this only documents the schema.
 *
 * Usage (after .env is filled and Email/Password auth works):
 *   node scripts/bootstrap-firestore.mjs
 *
 * Creates a temporary admin bootstrap account if needed, writes _meta/schema,
 * then leaves Auth users alone (does not delete the bootstrap user).
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
const EMAIL = 'bootstrap@championsjourney.test';

if (!API_KEY || !PROJECT_ID) {
  console.error('Missing VITE_FIREBASE_* in .env — see docs/FIREBASE_SETUP.md');
  process.exit(1);
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

async function main() {
  console.log(`Bootstrap Firestore schema marker for ${PROJECT_ID}`);
  console.log('Note: with production rules, clients cannot write `_meta`.');
  console.log('Deploy rules from Console or: npx firebase-tools deploy --only firestore:rules');
  console.log('Then create users via: node scripts/seed-test-accounts.mjs');
  console.log('');
  console.log('Schema used by the app:');
  console.log('  users/{uid}  →  { state: AppState, updated: number }');
  console.log('  state.crm    →  { students, groups, sessions, payments }');
  console.log('  state.tracks →  journey chapters / lessons');
  console.log('');

  // Ensure Auth works against this project (smoke test)
  try {
    const auth = await signUpOrSignIn(EMAIL, PASSWORD);
    const url = `https://firestore.googleapis.com/v1/projects/${PROJECT_ID}/databases/(default)/documents/users/${auth.localId}`;
    const body = {
      fields: {
        updated: { integerValue: String(Date.now()) },
        state: toFirestoreValue({
          user: { name: 'Bootstrap', role: 'admin' },
          lang: 'ru',
          points: 0,
          tracks: [],
          posts: [],
          pupils: [],
          materials: [],
          achievements: [],
          coach: [],
        }),
      },
    };
    const res = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${auth.idToken}`,
      },
      body: JSON.stringify(body),
    });
    const data = await res.json();
    if (!res.ok) throw new Error(data.error?.message || JSON.stringify(data));
    console.log('OK — Auth + Firestore write to users/{uid} works.');
    console.log(`Bootstrap user: ${EMAIL} / ${PASSWORD}`);
    console.log(`UID: ${auth.localId}`);
  } catch (e) {
    console.error('FAIL:', e.message);
    console.error('Enable Email/Password auth and create a Firestore database first.');
    process.exit(1);
  }
}

main();
