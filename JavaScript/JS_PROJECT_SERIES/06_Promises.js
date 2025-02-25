// const data = fetch("https://api.bd.irfans.dev");
// data.then((res) => res.json()).then((data) => console.log(data));

// promise ---> pending --> either fulfill or reject

// <fulfill, response>
// <reject, ERROR>
// if promise fullfill then we can .then()
// if promise reject or ERROR then we can .catch()
// .finally() will runn all time and its not depends on fullfill and reject
// 3 state
// 3_1 pending
// 3_2 fullfill
// 3_3 Reject
// 3_4 setteled
// 3_4_1 fullfill setteled
// 3_4_2 Reject settele

// Promise means wada in hindi

// Promise.then().catch().finally()
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation.
const data = fetch("https://api.bd.irfans.dev", {
  method: "GET",
  headers: { accept: "application/json" },
}); // fetch return a promise

let allData = data.then((rawData) => rawData.json());

allData.then((data) => console.log("My data is ===== ", data));

allData.catch((err) => console.log(`Error ==> `, err));

allData.finally(() => console.log("complete"));
