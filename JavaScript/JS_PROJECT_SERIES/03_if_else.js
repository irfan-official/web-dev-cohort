function prepareChai(type) {
  if (typeof type != "string") {
    console.log("type is string required");
  }
  let new_type = type.toUpperCase();
  console.log(" ---- ", new_type);
  if (type === "Masala Chai") {
    console.log("Adding spices to the chai");
  } else {
    console.log("Preparing regular chai");
  }
}

prepareChai("Masala Chai");
prepareChai("Ginger Chai");

function calculate(amount) {
  // conver to number

  // if (typeof amount != "Number") {
  //   console.log("input amount is number is required");
  //   return "Error";
  // }
  if (amount > 1000) {
    return amount * 0.9;
  }
  return amount;
  // returnn amount > 100 ? amount * 0.9 : amount
}
let finalBill = calculate("lool");

console.log(finalBill);
console.log(calculate(10000000000));

function trafficLight(color) {
  switch (color) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("slow down");
      break;
    case "red":
      console.log("Go");
      break;
    default:
      console.log("Chalan kat do");
  }
}
trafficLight("yellow");

function checkTruthyValue(value) {
  if (value) {
    console.log("Truthy");
  } else {
    console.log("Falsy");
  }
}

checkTruthyValue(1);
checkTruthyValue(0);
checkTruthyValue("Irfann");
checkTruthyValue("");
checkTruthyValue([]);
checkTruthyValue([1, 2, 3]);

function login(username, password) {
  // loginIp = req.ip
  if (username === "admin" && (password === "1234" || loginIp == "127")) {
    console.log("Login Successful");
  } else {
    console.log("Invalid credentials");
  }
}
