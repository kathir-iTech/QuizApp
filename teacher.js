import { 
    getFirestore, 
    collection, 
    addDoc 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

import { app } from "./firebase.js";

const db = getFirestore(app);

// Function to generate 6-digit room code
function generateRoomCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

async function createRoom() {
    const topic = document.getElementById("topic").value;
    const timer = document.getElementById("timer").value;

    const roomCode = generateRoomCode();

    try {
        await addDoc(collection(db, "rooms"), {
            topic: topic,
            timer: timer,
            roomCode: roomCode,
            status: "waiting"
        });

        document.getElementById("roomCodeDisplay").innerText =
            "Room Created! Code: " + roomCode;

    } catch (err) {
        alert(err.message);
    }
}

window.createRoom = createRoom;
