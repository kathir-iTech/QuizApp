let questions = [];
let currentIndex = 0;
let timerInterval;
let currentRoomId = ""; // We will get this from student join

function loadQuestions() {
    // Get the room ID of student
    db.collection("quizRooms")
      .where("status", "==", "started")
      .get().then(snap => {
          snap.forEach(doc => {
              currentRoomId = doc.id;
              db.collection("quizRooms").doc(currentRoomId)
              .collection("questions")
              .get().then(qSnap => {
                  qSnap.forEach(qDoc => {
                      questions.push(qDoc.data());
                  });
                  showQuestion();
              });
          });
      });
}

function showQuestion() {
    if (currentIndex >= questions.length) {
        window.location.href = "leaderboard.html";
        return;
    }

    let q = questions[currentIndex];
    document.getElementById("question-text").innerText = q.question;
    document.getElementById("opt1").innerText = q.options[0];
    document.getElementById("opt2").innerText = q.options[1];
    document.getElementById("opt3").innerText = q.options[2];
    document.getElementById("opt4").innerText = q.options[3];

    startTimer();
}

function answer(opt) {
    let correct = questions[currentIndex].correct;

    if (opt === correct) {
        alert("Correct!");
        db.collection("quizRooms").doc(currentRoomId)
        .collection("students").doc(auth.currentUser.uid)
        .update({score: firebase.firestore.FieldValue.increment(1)});
    } else {
        alert("Wrong! Correct answer: " + correct);
    }

    currentIndex++;
    clearInterval(timerInterval);
    showQuestion();
}

function startTimer() {
    let timeLeft = 15; // 15 seconds per question (can customize)
    document.getElementById("timer").innerText = timeLeft;
    timerInterval = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            answer(0); // 0 = no answer
        }
    }, 1000);
}

window.onload = loadQuestions;
