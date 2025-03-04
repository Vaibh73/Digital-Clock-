let format = 12;

function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    if (format === 12) {
        hours = hours % 12 || 12;
    }

    let time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("clock").innerText = time;

    if (hours === 11 && minutes === 11 && seconds === 0) {
        alert("💕 Manifesting Era Activated 💕");
    }
}

setInterval(updateClock, 1000);

function toggleFormat() {
    format = format === 12 ? 24 : 12;
    updateClock();
}

let stopwatchInterval;
let stopwatchTime = 0;

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTime++;
        document.getElementById("stopwatch").innerText = new Date(stopwatchTime * 1000).toISOString().substr(11, 8);
    }, 1000);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchTime = 0;
    document.getElementById("stopwatch").innerText = "00:00:00";
}

function startTimer() {
    let seconds = parseInt(document.getElementById("timerInput").value);
    let timerDisplay = document.getElementById("timerDisplay");

    let timerInterval = setInterval(() => {
        seconds--;
        timerDisplay.innerText = new Date(seconds * 1000).toISOString().substr(11, 8);
        if (seconds <= 0) {
            clearInterval(timerInterval);
            alert("Time's Up ");
        }
    }, 1000);
}

function toggleMode() {
    document.body.classList.toggle("dark-mode");

    let modeBtn = document.querySelector(".mode-toggle");
    if (document.body.classList.contains("dark-mode")) {
        modeBtn.innerText = "Dark Mode ON 🌙";
    } else {
        modeBtn.innerText = "Light Mode ON 💕";
    }
}

