if (!Array.prototype.hulululu) {
  Array.prototype.hulululu = function () {
    console.log("ole babu");
  };
}

let arr = [1, 2, 3];

arr.hulululu();

console.log(this === void 0);

void function open() {
  console.log("open called");
};

  