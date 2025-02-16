// this keyword js main one of the most suspenseful keyword

// keyword ka matlab hota hai aisa word jiska koi matlab ho programming

// keywords like: this let for while

// this ki value baar baar badal sakti hai alag alag confitions mein, assri condition s ko seekh jaao to this ko samjh jaaoge

// global
// function
// method
// func inside method (es5) -window
// func inside method (es6) -object
// constructor function mein this ki value - new blank object
// event listener mein this ki value - that element jispar event listner laga hai

// let a = 10; // variable a is in global scope

// function test() {
//   var b = 20; // variable b is in local scope
// }
// console.log(this); // window object
// function abcd() {
//   console.log(this); // window object
// }

// method - object

var obj = {
  name: function () {
    // this in method
    console.log(this);
  },
};

var es5 = {
  name: function () {
    // this in method
    console.log(this); // reffer es5 object
  },
  name2() {
    console.log("name2 = ", this); // reffer es5 object
  },
};

var es5_0 = {
  name: function () {
    console.log(this); // reffer to es5_0 object
    function childfnc() {
      console.log(this); // reffer to window object
    }
    childfnc();
  },
};

var es6 = {
  name: () => {
    console.log(this); // reffer to the window object
  },
};

var es6 = {
  name: function () {
    let childfnc = () => {
      console.log(this); // reffer to es6 object
    };
    childfnc();
  },
};

var es6_1 = {
  name: () => {
    function childfnc() {
      console.log(this); // reffer to the window object
    }
    childfnc();
  },
};

var es6_2 = {
  name: function () {
    let childfnc = () => {
      function innerChild() {
        console.log(this); // reffer to the window object
      }
      innerChild();
    };
    childfnc();
  },
};
es6_2.name();
