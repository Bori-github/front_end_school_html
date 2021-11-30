// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

let val = 1;
let sum = 0;
while (val < 101) {
  if (val % 2 == 0) {
    sum += val;
  }
  val++;
}

console.log(sum);
