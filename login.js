import { 
    getAuth, 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

import { 
    getFirestore, 
    setDoc, 
    doc, 
    getDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { app } from "./firebase.js";

const auth = getAuth(app);
const db = getFirestore(app);

// Sign Up
async function signup() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    try {
        const userCred = await createUserWithEmailAndPassword(auth, email, pass);

        await setDoc(doc(db, "users", userCred.user.uid), {
            email: email,
            role: role
        });

        alert("Account Created!");
    } catch (error) {
        alert(error.message);
    }
}

// Login
async function login() {
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;

    try {
        const userCred = await signInWithEmailAndPassword(auth, email, pass);
        const uid = userCred.user.uid;

        const userDoc = await getDoc(doc(db, "users", uid));
        const data = userDoc.data();

        if (data.role === "teacher") {
            window.location.href = "teacher-dashboard.html";
        } else {
            window.location.href = "student-dashboard.html";
        }

    } catch (error) {
        alert(error.message);
    }
}

window.signup = signup;
window.login = login;
