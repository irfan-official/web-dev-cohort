function greet(name) {
  console.log(`Hello ${name}`);
}

greet("");

let globalVar = "i am global";

function modifyGlobal() {
  globalVar = "I am modified";
  let blockScopedVar = "I am blocked-scoped";
}
modifyGlobal();

let config = (function () {
  let settings = {
    theme: "dark",
  };
  console.log(settings);
})();
// ---------------------------------------------------------
let person1 = {
  name: "ravi",
  greet: function () {
    console.log(`Hello ${this.name}`);
  },
};

let person2 = {
  name: "Hitesh",
};

// call method is call a function
// person1.greet.call(person2);

// Bind method return a new function
const bindGreet = person1.greet.bind(person2);
// console.log( person1.greet.bind(person2)())
// bindGreet();

// Apply method

// New ways to bind the function
person2.__proto__.new_fn = person1.greet;
person2.new_fn();
