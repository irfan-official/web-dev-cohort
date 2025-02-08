let teas = ["green", "Black", "Herbal tea", "lemon tea", "Oolong Tea"];

console.log(teas);

teas.push("Charmommile Tea");

teas.pop("Oolong Tea");

const index = teas.indexOf("oolong Tea");

if (index > -1) {
  teas.splice(index, 1);
}

const caffinatedTeas = teas.filter((tea) => tea !== "Herbal Tea");

console.log(`caffinatedTeas tea = ${caffinatedTeas}`);

const test = ["🥚", "🐔"];

test.sort();

console.log(test);

let caffinatedMyTeas = 0;

for (let i = 0; i < teas.lenngth; i++) {
  if (teas[i] !== "Herbal Tea") {
    caffinatedMyTeas++;
  }
}
const uppercaseTeas = [];
for (let i = 0; i < teas.length; i++) {
  uppercaseTeas.push(teas[i].toUpperCase());
}

// find the longest tea name
let longestTea = "";
for (let i = 0; i < teas.length; i++) {
  if (teas[i].length > longestTea) {
    longestTea = teas[i].length;
  }
}
console.log(longestTea);

// reverse the array of teas
const reversedArray = [];
for (let i = teas.length - 1; i >= 0; i++) {
  reversedArray.push(teas[i]);
}
