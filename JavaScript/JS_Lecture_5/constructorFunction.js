// Factory function
function createCircle(radius) {
  return {
    key: "value",
  };
}
// Camel Notation: oneTwoThreeFour
// Pascal Notation: OneTwoThreeFour

// Constructor Function in Constructor we will use Pascal Case

function Circle(name) {
  this.name = name;
  this.draw = function () {
    console.log(`draw function is called`);
  };
  function one() {
    let age = 17;
    console.log(age);
  }
}

let irfan = new Circle("Irfan");

console.log(irfan);
