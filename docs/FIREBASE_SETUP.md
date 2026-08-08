# Firebase setup for Champion's Journey (personal project)

The app stores **one document per user**:

```
users/{uid} → { state: AppState, updated: number }
```

Everything (CRM students/groups, journey tracks, posts, …) lives inside `state`.
No other Firestore collections are required for the app to run.

## 1. Console checklist (one-time)

In [Firebase Console](https://console.firebase.google.com/) for your project:

1. **Authentication** → Get started → enable **Email/Password**
2. **Firestore Database** → Create database → production mode (rules will be deployed next)
3. **Project settings** → Your apps → Web app → copy the `firebaseConfig` object

## 2. Local config

```bash
cp .env.example .env
# paste apiKey, authDomain, projectId, storageBucket, messagingSenderId, appId into .env
```

For **Cloud Run / CI**, Vite needs these vars at **build** time (they are baked into JS).  
The repo includes [`.env.production`](../.env.production) with the public web config for `champions-journey-ffb8d`, so `npm run build` works without a private `.env`.

If you use Docker instead of buildpacks:

```bash
docker build \
  --build-arg VITE_FIREBASE_API_KEY=... \
  --build-arg VITE_FIREBASE_AUTH_DOMAIN=... \
  --build-arg VITE_FIREBASE_PROJECT_ID=... \
  --build-arg VITE_FIREBASE_STORAGE_BUCKET=... \
  --build-arg VITE_FIREBASE_MESSAGING_SENDER_ID=... \
  --build-arg VITE_FIREBASE_APP_ID=... \
  -t champions-journey .
```

Update `.firebaserc` if your project id is not `champions-journey-ffb8d`.

## 3. Deploy rules

```bash
npx firebase-tools login
npx firebase-tools use champions-journey-ffb8d   # or your project id
npx firebase-tools deploy --only firestore:rules
```

Or paste the contents of `firestore.rules` into Console → Firestore → Rules → Publish.

## 4. Seed test accounts + demo state

With `.env` filled and Email/Password auth enabled:

```bash
node scripts/seed-test-accounts.mjs
```

Creates Auth users + `users/{uid}` docs for student / teacher / parent / admin
(password `TestCJ2026!`).

## 5. Optional schema marker

```bash
node scripts/bootstrap-firestore.mjs
```

Writes `_meta/schema` (informational). Clients cannot write this collection.

## 6. How sync works (and common pitfalls)

On every app page load the client:

1. Reads `localStorage` (`champions_journey_v2`)
2. Waits for Firebase Auth
3. **Loads** `users/{uid}` from Firestore and merges with local by `updated` timestamp / CRM weight
4. Debounced **saves** (~600ms) after CRM / Journey edits

If sync looks broken:

- Confirm login (teacher) — without Auth, `CJ_UID` is null and only localStorage is used
- Hard-refresh after login so cloud pull runs before painting CRM
- Check browser console for `Firebase save failed` / `Firebase load failed`
- Remember: each role has its **own** `users/{uid}` doc. Teacher CRM does not appear in parent/student documents by design (parent/student see Journey progress via `studentId` links)
