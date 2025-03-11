const start = document.querySelector("#startButton");
const display = document.querySelector("#countdownDisplay");
const input = document.querySelector("#timeInput");
let limit = undefined;
let interval = undefined;
let flag = 0;

function count() {
  if (limit <= 0) {
    clearInterval(interval);
    flag = 0;
    start.innerText = "Start Countdown";
  }

  display.innerText = `${limit}`;
  limit--;
}

start.addEventListener("click", () => {
  if (flag === 0) {
    limit = Number(input.value);
    flag = 1;
  }

  if (start.innerText === "Start Countdown") {
    start.innerText = "Stop";
    interval = setInterval(count, 1000);
  } else {
    start.innerText = "Start Countdown";
    clearInterval(interval);
  }
});
