const chaiTypes = ["Masala Chai", "Ginger chai", "Green Tea"];

console.log(chaiTypes[2]);

console.log(`Toatal chai Types: ${chaiTypes.length}`);

chaiTypes.push("Herbal Tea");
chaiTypes.pop(); // remove array element from last index and return the deleted item

let index = chaiTypes.indexOf("Green Tea");

console.log(index);

if (index !== -1) {
  chaiTypes.splice(index, 1);
}

chaiTypes.forEach((chai, index) => {
  console.log(`${index + 1} : ${chai} `);
});

let moreChaiTypes = ["Oolonng Tea", "White Tea"];

let allChaiTypes = chaiTypes.concat(moreChaiTypes);

let newChaiTypes = [...chaiTypes, "Chamolina Tea"];

console.log(newChaiTypes);

// Array splice i smore important

let chaiRecipe = {
  name: "Masala Chai",
  ingredients: {
    teaLeaves: "Assam Tea",
    milk: "Full Cream Milk",
    sugar: "Brownnnn sugar",
    splice: ["Daalchaini", "Ginger"],
  },
  innstruction: "Bol water , add tea leaves",
};

// console.log(chaiRecipe.ingredients.splice[1]);

let updatedChaiRecepie = {
  ...chaiRecipe,
  innstruction:
    "Boil water, add tea leaves, milk, sugar, spices with some love",
};
console.log(updatedChaiRecepie);

// Mapping
let { name, ingredients } = chaiRecipe; // object destructuring
let [firstChai, secondChai] = chaiTypes; // Array destructuring
