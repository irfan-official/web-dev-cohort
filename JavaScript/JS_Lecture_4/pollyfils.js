//1. polyfill for forEach

if (!Array.prototype.myForEach) {
  // Fallback - Polyfill - Backup Function
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

//2. polyfill for map
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

//3. polyfill for filter
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
