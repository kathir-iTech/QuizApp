// ---------------- Firebase Imports ----------------
import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);

// ---------------- Signup ----------------
async function signup() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        msg.textContent = "Signup successful! Redirecting...";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "login.html";  // <--- REDIRECT WORKS NOW
        }, 1200);

    } catch (error) {
        msg.textContent = error.message;
        msg.style.color = "red";
    }
}

// ---------------- Login ----------------
async function login() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    try {
        await signInWithEmailAndPassword(auth, email, password);
        msg.textContent = "Login successful! Redirecting...";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "student-dashboard.html";  // OR teacher-dashboard.html
        }, 1200);

    } catch (error) {
        msg.textContent = error.message;
        msg.style.color = "red";
    }
}

// Make functions available to HTML
window.signup = signup;
window.login = login;
