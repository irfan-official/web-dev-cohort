// polyfill for myForEach
if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (cb, lim = this.length) {
    lim = lim > this.length ? this.length : lim;
    for (let i = 0; i < lim; i++) {
      cb(this[i], i);
    }
  };
}

let arr1 = [1, 2, 3];

arr1.myForEach((item, index) => {
  console.log(`item = ${item} || index = ${index}`);
}, 5);

//--------------------------------------------------------------

// polyfill for myMap

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      arr.push(cb(this[i], i));
    }
    return arr;
  };
}

let arr2 = [1, 2, 3];

let arr = arr2.myMap((item, index) => {
  return { item: item, index: index };
});

console.log(arr);

//-------------------------------------------------------------

// polyfill for myFilter

if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (cb) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
      if (cb(this[i], i)) {
        arr.push(this[i]);
      }
    }
    return arr;
  };
}

let arr3 = [1, 2, 3];

let arr4 = arr3.myFilter((item, index) => {
  return index === 0;
});

console.log(arr4);

//----------------------------------------------------------

// polyfill for reduce

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (cb, val = this[0]) {
    for (let i = 1, lim = this.length; i < lim; i++) {
      val = cb(val, this[i]);
    }
    return [val];
  };
}

let nums = [1, 2, 3, 4];

console.log(nums.myReduce((accumulator, current) => accumulator + current, 10));

// ----------------------------------------------------------

