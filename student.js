function joinRoom() {
    let code = document.getElementById("room-code").value.trim();

    if (code === "") {
        alert("Please enter room code!");
        return;
    }

    // Just go to login page with the room ID
    window.location.href = "login.html?room=" + code;
}
