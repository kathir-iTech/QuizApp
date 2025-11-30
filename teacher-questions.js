import { getFirestore, doc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

async function addQuestion() {
    const roomCode = document.getElementById("room-code").value.trim();
    const text = document.getElementById("question-text").value;
    const options = [
        document.getElementById("option1").value,
        document.getElementById("option2").value,
        document.getElementById("option3").value,
        document.getElementById("option4").value
    ];
    const correct = document.getElementById("correct").value;
    const timer = parseInt(document.getElementById("timer").value) || 30;

    if (!roomCode || !text || !correct) {
        alert("Please fill all required fields!");
        return;
    }

    const roomRef = doc(db, "quizRooms", roomCode);

    await updateDoc(roomRef, {
        questions: arrayUnion({text, options, correct, timer})
    });

    alert("Question added!");
}

window.addQuestion = addQuestion;
