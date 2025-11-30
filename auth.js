import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";

import { app } from "./firebase.js";

const auth = getAuth(app);

// ---------------- Signup ----------------
window.signup = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        msg.innerText = "Signup successful! Redirecting...";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "login.html";
        }, 1500);

    } catch (error) {
        msg.innerText = error.message;
        msg.style.color = "red";
    }
};

// ---------------- Login ----------------
window.login = async function () {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const msg = document.getElementById("msg");

    try {
        await signInWithEmailAndPassword(auth, email, password);
        msg.innerText = "Login successful! Redirecting...";
        msg.style.color = "green";

        setTimeout(() => {
            window.location.href = "student-dashboard.html";  
        }, 1500);

    } catch (error) {
        msg.innerText = error.message;
        msg.style.color = "red";
    }
};
