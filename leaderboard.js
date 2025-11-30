import { getFirestore, doc, getDoc, collection, getDocs, query, orderBy } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { app } from "./firebase.js";

const db = getFirestore(app);

const params = new URLSearchParams(window.location.search);
const roomId = params.get("room");

const leaderboardDiv = document.getElementById("leaderboard");

async function showLeaderboard() {
    if (!roomId) {
        leaderboardDiv.innerText = "Room ID missing!";
        return;
    }

    const studentsCol = collection(db, "quizRooms", roomId, "students");
    const q = query(studentsCol, orderBy("score", "desc"));
    const snapshot = await getDocs(q);

    leaderboardDiv.innerHTML = "";
    snapshot.forEach(doc => {
        const data = doc.data();
        const div = document.createElement("div");
        div.innerHTML = `${data.avatar} ${data.name} - ${data.score} points`;
        leaderboardDiv.appendChild(div);
    });
}

showLeaderboard();
