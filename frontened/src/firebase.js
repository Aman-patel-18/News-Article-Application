// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "morning-dispatch-1.firebaseapp.com",
  projectId: "morning-dispatch-1",
  storageBucket: "morning-dispatch-1.firebasestorage.app",
  messagingSenderId: "116708090605",
  appId: "1:116708090605:web:66e2280b722d4d82e3a2e4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);