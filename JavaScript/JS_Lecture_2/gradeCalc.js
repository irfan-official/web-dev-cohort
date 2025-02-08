// 90 - A
// 80 - B
// 70 - C
// 60 >= D
// F - F

let score = 78;
let result = null;

if (score >= 90 && score <= 100) {
  result = "A";
} else if (score >= 80 && score < 90) {
  result = "B";
} else if (score >= 70 && score < 80) {
  result = "C";
} else if (score >= 60 && score < 70) {
  result = "D";
} else {
  result = "F";
}
console.log(`your result is = ${result}`);
