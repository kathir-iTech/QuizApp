import { auth } from "./firebase.js";
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword 
} from "https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js";

const msg = document.getElementById("msg");

export function signup() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      msg.innerHTML = "Signup successful!";
    })
    .catch(err => msg.innerHTML = err.message);
}

export function login() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      msg.innerHTML = "Login successful!";
      window.location.href = "student-dashboard.html";
    })
    .catch(err => msg.innerHTML = err.message);
}
