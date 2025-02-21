const person = {
  firstName: "Initial value",
  lastName: "Last value",
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    let nameArray = value.split(" ");
    this.firstName = nameArray[0];
    this.lastName = nameArray[1];
  },
};

person.fullName = "Irfan Bahi"
console.log(person);
