let teas = ["massala", "ginger", "oolong", "orange", "rose", "lemon"];

// for (let h = 0; h < teas.length; h++) {
//   console.log(`tea at index ${h}: ${teas[h]}`);
// }

// let h = 6; // h <= 5 || h < 6
// teas[h];

// teas.length; // 6

// loop, old name is iteration; used as i
// variable leke aao
// limit batao
// incre/decre

let anotherArray = [];
function sumfac(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

let result = sumfac([1, 2, 3, 4, 5]);

console.log(result);
