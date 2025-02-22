let name = "Irfan";
const pi = 3.13;

let number = 43; //Number
let text = "Hello"; // String
let isTrue = true; // Boolean
let nothing = null; // Object
let undefinedVar = undefined; // undefined
let symbol = Symbol(); // symbol
let bigInt = BigInt(100); // bigint

let person = {
  // Object
  name: "Irfan",
  age: 19,
  isStudennt: true,
};

let num = "42";
let convertedNum = Number(num); // This is production level approach
// let convertedNum = +num;
// let convertedNum = parseInt(num);
console.log(convertedNum);

// mongodb objectID is not string

let str = 123;
let convertedString = String(str);

// paranthesis is best friend

// top most priority is code readability

let a = 10;
let b = 3;
let sum = a + b;

let difference = a - b;
let product = a * b;
let quotient = a / b;
let power = a ** b;

// comparisn

let x = 5;
let y = 10;

console.log(x == y); // comparisn operator || eqaul to ==
console.log(x === y); // strict comparisn
console.log(x > y);
console.log(x < y);
console.log(x <= y);

// core js -->  math and dateTime
// nodejs --> crypto ann http

console.log(Math.max(5, 10));
console.log(Math.min(5, 10));
console.log(Math.random() * 10);

let firstName = "hitesh";
let lastName = "Choudhary";

let fullName = firstName + lastName; //hiteshChoudhary
//let fullName = firstName + " " + lastName //hitesh Choudhary
let message = "Hello world";
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.indexOf("w")); // return index of substring
console.log(message.slice(0, 5)); // return slice of substring

// indexOf and slice
// cuppon code is in upper case

let myName = "Hitesh";

let greeting = `Hello ${myName}, from chaicode`; //template littreal


