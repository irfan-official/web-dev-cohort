let mainHeading = document.querySelector("#mainHeading");
let redButton = document.querySelector("#redButton");
let greenButton = document.querySelector("#greenButton");
let blueButton = document.querySelector("#blueButton");
let purpleButton = document.querySelector("#purpleButton");
let resetButton = document.querySelector("#resetButton");

redButton.addEventListener("click", () => {
  mainHeading.style.color = "red";
});
greenButton.addEventListener("click", () => {
  mainHeading.style.color = "green";
});
blueButton.addEventListener("click", () => {
  mainHeading.style.color = "blue";
});
purpleButton.addEventListener("click", () => {
  mainHeading.style.color = "purple";
});
resetButton.addEventListener("click", () => {
  mainHeading.style.color = "black";
});
