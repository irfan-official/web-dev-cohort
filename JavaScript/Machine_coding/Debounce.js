// Debounce // Last call will be accept
function ptaNhi(fn, delay) {
  let myId;
  // console.log(arguments);

  return (...arg) => {
    clearTimeout(myId);
    myId = setTimeout(() => {
      fn.apply(this, arg);
    }, delay * 1000);
  }; // if a function return from a function this concept is  known as tiffin box concept
}

function greet(name) {
  console.log(`Hello ${name}`);
}
let check = ptaNhi(() => greet("hitesh"), 30);
let check2 = ptaNhi(() => greet("hitesh"), 3);

// remove past request => keep a reference of it
// fire a new request
// userRequest() => debouncedUserRequest()



check()
check()
check()
