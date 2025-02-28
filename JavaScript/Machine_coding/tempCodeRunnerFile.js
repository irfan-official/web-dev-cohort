function ptaNhi(fn, delay) {
  let myId;
  // console.log(arguments);

  return function (...arg) {
    clearInterval(myId);
    myId = setTimeout(() => {
      fn.apply(this, arg);
    }, delay * 1000);
  }; // if a function return from a function this concept is  known as tiffin box concept
}

function greet(name) {
  console.log(`Hello ${name}`);
}
let check = ptaNhi(() => greet("hitesh"), 3);
let check2 = ptaNhi(() => greet("hitesh"), 3);
