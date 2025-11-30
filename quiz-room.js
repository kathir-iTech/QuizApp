import { updateDoc, doc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

function checkAnswer(selected, correct) {
    const userId = auth.currentUser.uid;
    const studentRef = doc(db, "quizRooms", roomId, "students", userId);

    if (selected === correct) {
        alert("Correct!");
        // add 10 points
        updateDoc(studentRef, { score: firebase.firestore.FieldValue.increment(10) });
    } else {
        alert("Wrong! Correct: " + correct);
    }
}
