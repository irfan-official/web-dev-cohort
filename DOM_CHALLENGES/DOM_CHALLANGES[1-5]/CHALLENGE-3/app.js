let nameInput = document.querySelector("#nameInput");
let jobInput = document.querySelector("#jobInput");
let ageInput = document.querySelector("#ageInput");
let bioInput = document.querySelector("#bioInput");

let nameDisplay = document.querySelector("#nameDisplay");
let jobDisplay = document.querySelector("#jobDisplay");
let ageDisplay = document.querySelector("#ageDisplay");
let bioDisplay = document.querySelector("#bioDisplay");

let formGroup = document.querySelector(".form-group");

nameInput.addEventListener("input", () => {
  nameDisplay.innerText = nameInput.value || "Not provided";
});
jobInput.addEventListener("input", () => {
  jobDisplay.innerText = jobInput.value || "Not provided";
});
ageInput.addEventListener("input", () => {
  ageDisplay.innerText = ageInput.value || "Not provided";
});
bioInput.addEventListener("input", () => {
  bioDisplay.innerText = bioInput.value || "Not provided";
});
