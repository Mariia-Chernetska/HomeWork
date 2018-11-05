"use strict";
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval = null;
let running = -1;

const time = document.querySelector(".time");
const start = document.querySelector(".js-start");
const lap = document.querySelector(".js-take-lap");
const reset = document.querySelector(".js-reset");
const laps = document.querySelector(".js-laps");
reset.disabled = true;

clearInterval(interval);
interval = setInterval(startTimer, 100);

function startTimer() {
  if (running === 0) {
    milliseconds++;
    if (milliseconds >= 10) {
      milliseconds = 0;
      seconds++;
      if (seconds >= 60) {
        seconds = 0;
        minutes++;
      }
    }
    time.textContent = `${minutes > 9 ? minutes : "0" + minutes}:${
      seconds > 9 ? seconds : "0" + seconds
    }.${milliseconds > 9 ? milliseconds : milliseconds}`;
  }
}

function btnStartPause() {
  if (start.textContent !== "Pause") {
    reset.disabled = false;
    running = 0;

    start.textContent = "Pause";
  } else {
    reset.disabled = false;

    start.textContent = "Continue";
    running = 1;
  }
}

function btnReset() {
  reset.disabled = true;
  milliseconds = seconds = minutes = 0;
  interval = null;
  running = -1;
  start.textContent = "Start";
  time.textContent = `0${minutes}:0${seconds}.${milliseconds}`;
}


function btnLap(){
  const li = document.createElement("li");
  li.style.listStyle = 'none';
  li.appendChild(document.createTextNode(time.textContent));
  laps.appendChild(li);
}

start.addEventListener("click", btnStartPause);
reset.addEventListener("click", btnReset);
lap.addEventListener("click", btnLap);
