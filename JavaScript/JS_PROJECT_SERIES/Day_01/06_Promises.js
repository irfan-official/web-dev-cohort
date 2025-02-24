const data = fetch("https://api.bd.irfans.dev");
data.then((res) => res.json()).then((data) => console.log(data));
