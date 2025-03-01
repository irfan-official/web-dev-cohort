// async function loadFeature() {
//   if (true) {
//     // Condition to dynamically load the module
//     let { feature } = await import("./featureModule.mjs");
//     // Call the dynamically loaded function

//     console.log("feature is === ", feature);
//   }
// }

// loadFeature();

// let a = null;

// function one() {
//   console.log("One is called");
// }
// function two() {
//   console.log("Two is called");
// }

// console.log("b is = ", b);

// console.log((typeof "Irfan") === "string")

// grade = "8th"

// let gradeArray = grade.split("t")
// console.log(gradeArray)

function getNestedValue(obj, keyPath) {
  let paths = keyPath.split(".");
  let newObj = obj;

  for (let i = 0; i < paths.length; i++) {
    if (newObj == null || !newObj.hasOwnProperty(paths[i])) {
      return "Key not found";
    }
    newObj = newObj[paths[i]];
  }
  
  return newObj;
}



console.log(
  getNestedValue({ user: { profile: { name: "Alice" } } }, "user.profile.name")
); // Output: "Alice"
console.log(
  getNestedValue({ user: { profile: { age: 25 } } }, "user.profile.name")
); // Output: "Key not found"
