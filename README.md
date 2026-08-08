# Champion's Journey

Developed by Azamat Armanuly and Kuanysh Magauin.

A gamified pupil-tracking and learning-path app for robotics schools — built mobile-first as an installable PWA. Coaches manage attendance and payments; pupils follow a Duolingo-style robotics path.

**Live demo:** https://championsjourney.netlify.app/

> Built for Kazakhstani robotics programs (FIRST · WRO · STEM). Interface in Russian, Kazakh and English.

---

## Features

- **Gamified learning path** — progression-locked robotics lessons with Canva materials
- **Placement survey** — onboarding quiz unlocks the Olympiad track for advanced pupils
- **Weekly timetable** — calendar with recurring class slots and competitions
- **Coach CRM** — pupils, groups, sessions, payments, schedule, reports
- **Journey editor (teachers)** — create and edit sections and lessons on the Path
- **Multi-language** — Russian / Kazakh / English
- **Installable PWA** — service worker + web app manifest
- **Firebase backend** — email/password auth and full state sync to Firestore

---

## Teacher CRM

Modular CRM under `src/crm/` (dashboard, students, groups, sessions, schedule, reports).

### Dashboard (home for staff)

1. **Today’s schedule** — groups meeting today
2. **Groups** — quick “Mark attendance” into a session
3. **Reminders** — payments due, low lessons, birthdays, today’s classes

### Students

- List with filters (all / active / unpaid / absent / archive)
- Student card: subscription, attendance, payments, timeline, photo
- **Archive**, **restore**, and **permanent delete**
- Migration cleanup: dedupe students, group memberships, and payments

### Groups & sessions

- Group list and detail (roster, schedule, capacity)
- Session flow: mark present / absent / late / makeup / sick; deduct lessons when appropriate

### Schedule

- Today / week views for group classes with one-tap attendance

### Reports

- **Income hero** (month / today)
- Overview metrics (students, active, groups, unpaid, etc.)
- Period stats (lessons held, new / churned, attendance)
- Breakdown by school, track, top groups
- Recent payments, new students, birthdays

Architecture notes: [docs/crm/ARCHITECTURE.md](docs/crm/ARCHITECTURE.md).

---

## Journey editor (teacher / admin)

On the **Path** screen for unlocked tracks:

| Action | UI |
|--------|-----|
| Add section | “+ Add section” bar |
| Edit section | ✎ on the section banner |
| Add lesson | + on the section banner |
| Edit lesson | ✎ on the lesson node (title, link, duration) |
| Delete lesson | × on the lesson node (with confirm) |

Pupils still complete lessons and unlock certificates as before. Locked tracks (e.g. Olympiad until subscribed) stay read-only.

---

## Cloud sync (Firebase)

All app state — including **CRM** (`state.crm`) and **tracks / chapters / lessons** — is stored in Firestore:

```
users/{uid} → { state, updated }
```

Behaviour:

- Debounced `save()` (~600 ms) after every change (CRM, Path, profile, etc.)
- Firebase auth re-bound on each app page so cloud sync works after full page navigations
- Immediate flush on `pagehide` so MPA navigation does not drop pending writes
- If the cloud copy has no `crm` yet, local CRM is kept instead of being wiped on login
- Saves go through JSON round-trip so Firestore never receives `undefined` fields

---

## Tech stack

| Area | Technology |
|------|------------|
| Language | **TypeScript** |
| Build | **Vite 6** (multi-page app) |
| Styling | **CSS3** (`styles/main.css`, `styles/crm.css`) |
| Backend | **Firebase** — Auth + Firestore |
| Hosting | **Netlify** (`dist/`) |

Each screen is a **separate HTML page** (not a single monolithic `index.html`), which keeps bundles scoped and avoids inline script in markup.

---

## Project structure

```
champions-journey/
├── index.html              # landing (Vite entry)
├── pages/login.html        # role picker
├── pages/auth.html         # Firebase sign-in / sign-up
├── app/*.html              # main app screens (home, journey, CRM, …)
├── src/
│   ├── core/               # nav, firebase, types, theme
│   ├── pages/              # thin TS entry points per HTML page
│   ├── app/
│   │   ├── _raw.js         # editable app logic (source of truth)
│   │   └── app-engine.ts   # generated from _raw.js
│   └── crm/                # teacher CRM module
├── styles/                 # shared CSS
├── docs/crm/               # CRM architecture
├── scripts/
│   ├── build-app-engine.mjs
│   ├── generate-html-pages.mjs
│   └── seed-test-accounts.mjs
├── legacy/index.monolith.html
└── public/sw.js
```

---

## Development

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # build-app-engine + vite build → dist/
npm run preview      # preview production build
```

Regenerate HTML shells after changing the page list:

```bash
node scripts/generate-html-pages.mjs
```

After editing `src/app/_raw.js`, regenerate the engine:

```bash
node scripts/build-app-engine.mjs
```

### Test accounts (Firebase)

Seed (or refresh) demo users:

```bash
node scripts/seed-test-accounts.mjs
```

| Role | Email | Password |
|------|-------|----------|
| Student | `student@championsjourney.test` | `TestCJ2026!` |
| Teacher | `teacher@championsjourney.test` | `TestCJ2026!` |
| Parent | `parent@championsjourney.test` | `TestCJ2026!` |
| Admin | `admin@championsjourney.test` | `TestCJ2026!` |

Teacher and admin see CRM and Path editing. Data syncs per signed-in user.

---

## Cloud Run

The app is a static Vite build. Deploy with the included `Dockerfile`, which serves `dist/` on **`$PORT`** (Cloud Run sets `8080`).

Firebase web config must be present at **build** time (`VITE_FIREBASE_*`).  
Source deploy / buildpacks pick up committed [`.env.production`](.env.production).  
Do not rely on Cloud Run *runtime* env vars for Vite — they are too late.

```bash
# Local check (must listen on 8080)
docker build -t champions-journey .
docker run --rm -p 8080:8080 -e PORT=8080 champions-journey
# open http://localhost:8080
```

Cloud Build / Cloud Run must use this Dockerfile (container port **8080**, or whatever you set as `PORT`). If the container starts but does not bind `0.0.0.0:$PORT`, Cloud Run reports `failed_precondition` / “failed to start and listen on PORT”.

---

## Firebase

Full setup: [docs/FIREBASE_SETUP.md](docs/FIREBASE_SETUP.md).

1. Enable **Authentication → Email/Password** and create a **Firestore** database.
2. Copy `.env.example` → `.env` and paste your web `firebaseConfig`.
3. Deploy rules: `npm run firebase:rules` (or paste `firestore.rules` in the Console).
4. Seed demo users: `npm run firebase:seed`.

Data model (only collection the app needs):

```
users/{uid} → { state, updated }
```

CRM and Journey content live inside `state` (`state.crm`, `state.tracks`, …).

Suggested rules are in [`firestore.rules`](firestore.rules):

```
match /users/{uid} {
  allow read, write: if request.auth != null && request.auth.uid == uid;
}
```

---

## License

MIT — see [LICENSE](LICENSE).

Made in Astana, Kazakhstan.
