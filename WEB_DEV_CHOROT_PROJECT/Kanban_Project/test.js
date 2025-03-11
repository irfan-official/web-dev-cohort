function one() {
  return "one is called";
}

function two() {
  return "two is called";
}
function three() {
  return "three is called";
}

let x = (one(), two(), three());

console.log(x);

let user = { name: "Irfan", age: 24 };

with (user) {
  console.log(name); // "Irfan"
  console.log(age); // 24
}

// let result = "hello"
//   |> (str => str.toUpperCase())
//   |> (str => str + " WORLD");

// console.log(result); // "HELLO WORLD"

let { name = "Irfan" } = { irfan: null };

console.log(name);
