let count = 0;
function increment() {
  // Clouser Function (Function binded by its lexical scope)
  return () => count++;
}

let val = increment();

console.log(val());
console.log(val());
console.log(val());
console.log(val());
console.log(val());
console.log(val());

val = null; // we use val = undefined as well as
// solve the memory leack problems
// clear the memory refference

function change(_, val = 111) {
  z = val;
}

let z = 999;
change(z, 111);
console.log(z);

// Debounce is use clouser
function createDebounce(cb, delay = 1) {
  let timerId = null;

  return function () {
    clearTimeout(timerId);
    timerId = setTimeout(() => cb(...args), delay * 1000);
  };
}

// Throttling is use clouser
function createThrottling(cb, delay = 1) {
  let timerId = null;
  return function () {
    if (timerId === null) {
      cb(...args);
      timerId = setTimeout(() => (timerId = null), delay * 1000);
    }
    timerId = setTimeout(cb, delay);
  };
}
