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
