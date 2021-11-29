// https://codingdojang.com/scode/408?answer_mode=hide
let sample = [1, 3, 4, 8, 13, 17, 20];
let temp = sample[0];

// 최대값 구하기
for (let i = 0; i < sample.length; i++) {
  if (temp < sample[i]) {
    temp = sample[i];
  }
}
console.log(temp);

temp = sample[0];
// 최소값 구하기
for (let i = 0; i < sample.length; i++) {
  if (temp > sample[i]) {
    temp = sample[i];
  }
}
console.log(temp);

let tmp = sample[1] - sample[0];
let result = 0;

for (let i = 1; i < sample.length; i++) {
  // console.log(sample[i - 1], sample[i]);
  if (tmp > sample[i] - sample[i - 1]) {
    tmp = sample[i] - sample[i - 1];
    result = i;
  }
}

console.log(result);

// let text = "javascript";

// for (let i = 1; i < text.length; i++) {
//   console.log(text[i - 1] + text[i]);
// }
