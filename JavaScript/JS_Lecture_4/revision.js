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

console.log(teaCopy);

Object.prototype.chai = function () {
  console.log("chai aur code");
};
const tea = {
  name: "Ice tea lemon",
  type: "cool",
};
tea.chai();

tea.__proto__.checkItem = () => {
  return true;
};

const show = {
  message: "OK",
};

console.log(show.checkItem());

const arr = [1, 2, 3];

// prototye <---- .__proto__

//polyfils

// Array.prototype = {}
// let arr = new Array([1,2,,3]) ---> arr.__proto__ = Array.prototype;
const arr1 = [4];

if (!Array.prototype.myForEach) {
  // Fallback - polyfill - Backup Function
  Array.prototype.fill = function () {
    const arr = [1, 2, 3, 4, 5, 6];
    // Error: -> .forEach function does not exist on arr variable or .forEach not defined

    // 1st understand the signature or behavior of function

    console.log(`value at Index ${index} is ${value}`);

    // Real signature ko samjo - No retturn, function input, value, index
    // calls my fn for every value

    Array.prototype.myForEach = function (userFn) {
      const originalArr = this;
      for (let i = 0; i < originalArr.length; i++) {
        userFn(originalArr[i], i);
      }
    };
  };
}

//signature .map
// Rety=turn? - New Array, Each ele Iterate, userFn

const n = arr.map((e) => e * 2);
console.log(n);
console.log(arr);

// polyfill for map
if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (userFn) {
    const result = [];

    for (let i = 0; i < this.length; i++) {
      const value = userFn(this[i], i);
      result.push(value);
    }
    return result;
  };
}

// Filter
// Signature: Return - new array | inpout: userFn,
// agar user ka function True return karta hai toh current value ko new array mai return karta hai

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (userFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      if (userFn(this[i])) {
        result.push(this[i]);
      }
    }
    return result;
  };
}
