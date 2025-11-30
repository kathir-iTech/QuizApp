// Firebase v9 module import
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAd3QHF4aldBFiZ8dHRb8s2cwB3hkMUKKM",
  authDomain: "quizappprototype-6ab14.firebaseapp.com",
  projectId: "quizappprototype-6ab14",
  storageBucket: "quizappprototype-6ab14.firebasestorage.app",
  messagingSenderId: "908870330864",
  appId: "1:908870330864:web:d3d517047c12d2135cd535",
  measurementId: "G-X4YN2R7XLK"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

console.log("Firebase Loaded");
