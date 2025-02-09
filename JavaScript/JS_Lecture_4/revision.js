const teas = {
  name: "Lemon tea",
  "tea type": "Green",
  caffine: "low",
};

console.log(teas.name);
console.log(teas["tea type"]);

teas.origin = "Assam";

teas.caffine = "Medium";

delete teas["tea type"];
console.log("origin" in teas);

for (let key in teas) {
  console.log(key + ":" + teas[key]);
}

const myTeas = {
  greentea: {
    name: "Green Tea",
  },
  blackTea: {
    name: "Black tea",
  },
};

let teaCopy = JSON.parse(JSON.stringify(myTeas));

console.log(teaCopy)