let arr = [1, 2, 3, 4, 5];

function P_R_O_X_Y(object) {
  return new Proxy(object, {
    get(target, prop) {
      let check = Number(prop);
      if (typeof check == "number") {
        if (prop < 0 && !prop in target) {
          prop = `${target.length + check}`;
          // console.log("Pass", prop);
        }
        return prop in target
          ? target[prop]
          : `Property "${prop}" does not exist`;
      } else {
        // this is a string prop
        return prop in target
          ? target[prop]
          : `Property "${prop}" does not exist`;
      }
    },
    set(target, prop, value) {
      target[prop] = value;
      return true;
    },
  });
}

let proxArr = P_R_O_X_Y(arr);

proxArr[-5] = 1111;

console.log(arr); // [ 1, 2, 3, 4, 5, '-5': 1111 ]
console.log(proxArr[-5]);


