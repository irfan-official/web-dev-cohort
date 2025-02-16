//// Question .1 ? Function Statement vs Function Expression vs Function Declaration
//// Major Difference is between function statement and function expression is Hoisting

//// Function Statement it is also knows as function Declaretion
function a() {
  console.log("Function a is a function statement");
}

//// Function Expression
var b = function () {
  console.log("Function b is a function Expression");
};

//// Function Declaration
function c() {
  console.log("Function a is a function Declaretion");
}

//// Anonymous Function
let Anonymous = function () {
  console.log("This is a Anonymous Function");
};

//// Named Function Expression
// A Function expression with a function name
let named_function_expression = function name() {};

//// Difference between Parameters & Arguments ?
function test(Parameter) {} // Paraneter
test(Arguments); // Arguments

//// First Class Functions
// Function  pass as a argument, this function is called callback function
// Function that accept callback function as a parameter is called first class function

//// Arrow Functions
// Fat arrow function
let fat_arrow = () => {};

// Fat arrow function with explicit return
let fat_explicit_return = () => {};

// Fat arrow function with implicit return
let fat_implicit_return = () => a + b;

// Fat arrow function with explicit return a object
let fat_explicit_return_onject = () => ({});
