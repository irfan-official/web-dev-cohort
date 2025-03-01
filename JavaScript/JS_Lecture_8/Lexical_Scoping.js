let fname = "Piyush"; // fname in global scope

function sayName() {
  let fname = "Hitesh"; // fname in local scope
  console.log("Value of Fname is", fname);
  function inner() {
    let lname = "Choudhery";
    console.log("Value of Fname is", fname);
  }
  inner();
}
console.log("Value of Fname is", fname);
sayName();
// Cannot redeclare block-scope variable 'fname'
