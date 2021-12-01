let m = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

console.log(m[0] + m[0]); // 1,2,31,2,3
console.log(m[0] - m[0]); // NaN
console.log(m[0] / m[0]); // NaN
console.log(m[0] * 2); // NaN
console.log(m[0].toString()); // 1,2,3
console.log(m[0] + ""); // 1,2,3

let sample = [1, 2, 3];
// for in : sample 안의 요소 인덱스
for (let i in sample) {
  sample[i] *= 2;
}

console.log(sample);

let nums = [1, 2, 3];
// for of : sample 안의 요소
for (let num of nums) {
  num *= 2;
}

console.log(nums);

let index = 0;
// for of : sample 안의 요소
for (let num of nums) {
  nums[index] *= 2;
  index++;
}

console.log(nums);
