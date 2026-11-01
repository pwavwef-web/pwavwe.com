import { initializeApp } from 'firebase/app';

const defaults = {
  apiKey: 'AIzaSyCMwy_PRlS7H2NjEvMVI44PKUS2K0dpjz8',
  authDomain: 'francis-pwavwe.firebaseapp.com',
  projectId: 'francis-pwavwe',
  storageBucket: 'francis-pwavwe.firebasestorage.app',
  messagingSenderId: '658069378543',
  appId: '1:658069378543:web:1a1caa8433c201b85bd21a',
};

// Initialised on its own so the prerendered public pages can read public
// testimonials without pulling Auth and Functions into their bundle.
export const firebaseApp = initializeApp({
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ?? defaults.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN ?? defaults.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID ?? defaults.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET ?? defaults.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID ?? defaults.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID ?? defaults.appId,
});
