let array = [10, 20, 30, 40, 50];
let i = 0;

// for (; i < array.length; ) {
//   console.log(array[i]);
//   i++;
// }

// array.forEach((e) => console.log(e * 3));

// for (let val in array) {
//   console.log(array[val]);
// }

// for (let value of array) {
//   console.log(value);
// }

// 평균 구하기
let sum = 0;
for (let value of array) {
  sum += value;
}

console.log(sum / array.length);
