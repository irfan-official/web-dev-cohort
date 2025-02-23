console.log("Hello from JS");
setTimeout(() => console.log("I am delayed", 0));
console.log("Bye Bye");

const obj = {
  personName: "Mukul",
  greet: function () {
    console.log(`Hello ${this.personName}`);
  },
};

console.log("Hello from JS");

// setTimeout(obj.greet, 2 * 100);
setTimeout(obj.greet.bind(obj), 2 * 100);

console.log("Bye Bye");

Promise.resolve().then(() => console.log("Promise resolve Hoyyae"));

setTimeout(() => console.log("Log 1"), 0);
console.log("BYE");

// visualize it https://www.jsv9000.app/

const apiResult = fetch("https://api.bd.irfans.dev");

apiResult
  .then((response) => response.json()) // Parse JSON from response
  .then((data) => console.log(data)) // Log the actual data
  .catch((error) => console.error("Error fetching data:", error)); // Handle errors
