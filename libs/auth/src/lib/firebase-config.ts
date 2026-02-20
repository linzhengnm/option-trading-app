import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration - Replace with your own Firebase project config
// Get this from Firebase Console: https://console.firebase.google.com/
export const firebaseConfig = {
  apiKey: process.env['VITE_FIREBASE_API_KEY'],
  authDomain: process.env['VITE_FIREBASE_AUTH_DOMAIN'],
  projectId: process.env['VITE_FIREBASE_PROJECT_ID'],
  storageBucket: process.env['VITE_FIREBASE_STORAGE_BUCKET'],
  messagingSenderId: process.env['VITE_FIREBASE_MESSAGING_SENDER_ID'],
  appId: process.env['VITE_FIREBASE_APP_ID'],
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);

// Initialize Firestore
export const db = getFirestore(app);
