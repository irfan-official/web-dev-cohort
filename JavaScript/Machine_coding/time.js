// console.log(second);

function UpdateClock() {
  const now = new Date();

  const hours = now.getHours() % 12 || 12;
  const mintues = now.getMinutes().toString().padStart(2, "0");
  const seconds = now.getSeconds().toString().padStart(2, "0");
  const ampm = now.getHours() >= 12 ? "AM" : "PM";
  const output = `${hours}:${mintues}:${seconds}:${ampm}`;
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const date = now.toLocaleDateString(undefined, options);
  console.log(`${output} || ${date}`);
}
setInterval(() => {
  UpdateClock();
}, 1000);
