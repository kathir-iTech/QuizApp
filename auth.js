import { auth } from "./firebase.js";
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/9.6.11/firebase-auth.js";

// ---- ROLE CHECK FUNCTION ----
function isTeacher(email) {
    return email.endsWith("@psgitech.ac.in");
}

// ---- SIGNUP ----
export function signup() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, pass)
        .then(() => {
            document.getElementById("msg").innerHTML = "Signup successful!";

            if (isTeacher(email)) {
                window.location.href = "teacher-dashboard.html";
            } else {
                window.location.href = "student-dashboard.html";
            }
        })
        .catch(err => {
            document.getElementById("msg").innerHTML = err.message;
        });
}

// ---- LOGIN ----
export function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    signInWithEmailAndPassword(auth, email, pass)
        .then(() => {
            document.getElementById("msg").innerHTML = "Login successful!";

            if (isTeacher(email)) {
                window.location.href = "teacher-dashboard.html";
            } else {
                window.location.href = "student-dashboard.html";
            }
        })
        .catch(err => {
            document.getElementById("msg").innerHTML = err.message;
        });
}

window.signup = signup;
window.login = login;
