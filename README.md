# Shopno Jatra

A full web travel experience for exploring Bangladesh's 64 districts.

## Optional Google database integration

To enable Firestore-backed saved trips, add these env vars to `.env.local`:

```bash
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

If they are not set, the app uses local browser storage automatically.

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
