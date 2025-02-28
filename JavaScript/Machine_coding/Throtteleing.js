// Throtteleing concept  /// First call will be accept
// Bottleneck
const ptaNhi = (fn, delay) => {
  let myId = null;

  return (...args) => {
    if (myId === null) {
      fn(...args);
      myId = setTimeout(() => {
        myId = null;
      }, delay * 1000);
    }
  };
};

let res = ptaNhi((val) => {
  console.log(val);
}, 30);

let temp = 0;
setInterval(() => {
  res(`Hello ${temp++}`);
}, 1000);

// onClick

//
 