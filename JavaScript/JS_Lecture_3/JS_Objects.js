// Practice 8.2.2025
const person = {
  x: 10,
  firstName: "Kazi",
  lastName: "Irfan",
  hobbies: ["Coding", "Gym"],
  isMarried: false,
  getFullName: function () {
    return this.x;
  },
  hasGf: false,
  hadGf: true,
  hadCrush: Infinity,
};
// access the x
console.log(person.x);
console.log(person["x"]);

console.log(person.hobbies);

console.log(person.getFullName());

console.log(person.hadCrush);

// Object is use for groping data

// when remote is an Object
const remote = {
  color: "black",
  brand: "XYZ",
  dimentionn: { height: 1, width: 1 },
  turnOff: function () {},
  vloumeUp: function () {},
};

let f_name = "Hitesh";
let f_name_2 = "Piysh";

// memory leack or accidental leak
// garbage collections

// Deep copy and shallow copy

// method 1 (shalow copy)
let p1_shallow = { name: "Irfan" };
let p2_shallow = { ...p1_shallow };

// method 2 (Deep copy)
let p1_deep = { name: "irfan" };
let p2_deep = JSON.parse(JSON.stringify(p1_deep));
p2_deep.name = "Imran";
console.log(p1_deep);

// method 3 (normal refference)
let p1_ncpy = { name: "Irfan" };
let p2_ncpy = {
  name: p1_ncpy.name,
};
p1_ncpy.name = "Monster";
console.log(p2_ncpy);

// method 4 (copy by refference)

let p_ref_1 = { name: "Irfan" };
let p_ref_2 = p_ref_1;
