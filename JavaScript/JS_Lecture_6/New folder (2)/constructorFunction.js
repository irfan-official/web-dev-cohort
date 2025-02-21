function TestConstructor(name = "Irfan") {
  this.name = name;
  this.age = 17;
  this.fun = function () {
    console.log("fun is called");
  };
}

const usr = new TestConstructor("Iqbal");

usr.fun();
 console.log(usr);
