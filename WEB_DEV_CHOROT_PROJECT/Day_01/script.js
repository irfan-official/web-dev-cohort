let date = document.querySelector("#date");
let time = document.querySelector("#time");

function updateClock() {
  const now = new Date();
  const hours = (now.getHours() % 12 || 12).toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "PM" : "AM";

  const options = {
    weekday: "long", // Full weekday name (e.g., "Monday")
    year: "numeric", // Full numeric year (e.g., "2025")
    month: "long", // Full month name (e.g., "March")
    day: "numeric", // Day of the month (e.g., "11")
  };
  const dateString = now.toLocaleDateString(undefined, options);

  time.innerText = `${hours} : ${minutes} : ${seconds} : ${ampm}`;
  date.innerText = dateString;
}
updateClock(); // at 0th second

setInterval(updateClock, 1000); // after every 1 second
