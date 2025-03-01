// Pollyfill for Promise

// function wait(secounds) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => resolve(), secounds * 1000);
//   });
// }

// wait(10)
//   .then(() => console.log(`Promise Resolved After 10 sec`))
//   .catch(() => console.log(`Reject after 10 sec`))
//   .finally(() => console.log(`Mei toh harr baar chalunga`));

class Mypromise {
  constructor(cb) {
    function resolveFn(value) {
      console.log("THis ====> ", this);
      this.then = function (cb) {
        cb(value);
      };
      this.finally = function (cb) {
        cb();
      };
      return true;
    }
    function rejectFn() {
      // this.catch = function (cb) {
      //   cb(Error);
      // };
      // return true;
    }
    cb(resolveFn, rejectFn);
  }
}
function wait(secounds) {
  return new Mypromise((resolve, reject) => {
    setTimeout(() => resolve(), secounds * 1000);
  });
}

// wait(3)
//   .then(() => console.log(`Promise Resolved After 10 sec`))
//   .catch(() => console.log(`Reject after 10 sec`))
//   .finally(() => console.log(`Mei toh harr baar chalunga`));

{
  // Promise is an Object that
  // 1. if it resolve then it will run resolve function
  // 2. if it reject then it will run reject function
}

let obj = new Mypromise((resolve, reject) => {
  resolve("helloo");
});

let obj2 = new Promise((resolve, reject) => {
  // if work is done then
  resolve("helloo");
  // else reject()
});

console.log(obj2);
