import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWv-AVEhOquqNFF57S7PXnqTN6PP8GUQk",
  authDomain: "login-42c94.firebaseapp.com",
  projectId: "login-42c94",
  storageBucket: "login-42c94.firebasestorage.app",
  messagingSenderId: "143893739752",
  appId: "1:143893739752:web:c15929d1e37ad2d37cb15d",
  measurementId: "G-9H56GPM589"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);