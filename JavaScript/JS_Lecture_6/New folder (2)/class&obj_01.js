const student = {
  // Direct way of creating object
  fullName: "Kazi Mohammed Irfan", // property 1
  marks: "94.4", // property 2
  printMarks: function () {
    // method 1
    console.log("marks = ", marks);
  },
};

// class One {
//   constructor(name) {
//     this.name = name;
//   }
//   method() {
//     return `${this.name}`;
//   }
// }

// let personOne = new One("Irfan");

// console.log(personOne.method());

class BluePrint {
  constructor(brandName = " ", model = " ", color = " ") {
    this.brandName = brandName;
    this.model = model;
    this.color = color;
    this.carInfo = `${brandName} ${model} `;
    this.start = false;
    this.stop = true;
    this.running = this.start ? true : false;
    this.reverse = false;
    this.forward = true;
  }
  $start() {
    this.start = true;
    return `${this.carInfo} is start`;
  }
  $run() {
    if (this.start) {
      this.running = true;
      return `${this.carInfo} is start running ${
        this.forward ? "forward" : "backward"
      }`;
    } else {
      return "please start the car!";
    }
  }
  $break() {
    this.stop = true;
    this.running = false;
    return `${this.carInfo} is stoped! `;
  }
  $reverse() {
    // if the car is not start then it will not reverse
    this.reverse = true;
    this.forward = false;

    return `${this.carInfo} is reversed`;
  }
  $forward() {
    this.forward = true;
    this.reverse = false;
    return `${this.carInfo} is forward`;
  }
}

let myCar = new BluePrint("BMW", "I8", "white");

console.log(myCar.$reverse());
console.log(myCar.$start());
console.log(myCar.$run());
console.log(myCar.$reverse());
console.log(myCar.$run());
console.log(myCar.$forward());
console.log(myCar.$run());
