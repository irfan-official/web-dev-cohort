const obj1 = {
  fname: "Irfan",
  lname: "Garg",
  getFullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};
const obj2 = {
  fname: "Rafsan",
  lname: "Garg",
  getFullname: function () {
    return `${this.fname} ${this.lname}`;
  },
};

//violate Dry run
