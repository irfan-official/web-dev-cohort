const data = fetch("https://api.bd.irfans.de"); // fetch return a promise

let allData = data.then((rawData) => rawData.json());

allData.then((data) => console.log("My data is ===== ", data));

data.catch((err) => console.log(`Error ==> `, err));

data.finally(() => console.log("complete"));