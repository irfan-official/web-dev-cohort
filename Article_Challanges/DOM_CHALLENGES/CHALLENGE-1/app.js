/**
 * Write your challenge solution here
 */

const body = document.querySelector("#body");
const bulb = document.querySelector("#bulb");
const button = document.querySelector("#toggleButton");
const buttonStatus = document.querySelector("#status");

OFF(); /// initially of

button.addEventListener("click", () => {
  if (buttonStatus.innerText === "Status: Off") {
    // On the bulb
    ON();
  } else {
    // Off the bulb
    OFF();
  }
});

function OFF() {
  bulb.classList.add("off");
  body.classList.add("dark-mode");
  buttonStatus.innerText = "Status: Off";
  button.innerText = "Turn On";
}
function ON() {
  body.classList.add("body");
  body.classList.remove("dark-mode");
  bulb.classList.remove("off");
  buttonStatus.innerText = "Status: On";
  button.innerText = "Turn Off";
}
