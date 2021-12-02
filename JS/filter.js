// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// mdn 예제
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];

// filter의 true인 값만 넘긴다
const result = words.filter((word) => word.length > 6);

console.log(result);

// 5 초과하는 숫자
let nums = [2, 6, 5, 4, 8, 5, 4, 3, 2, 9];

let overFive = nums.filter((num) => num > 5);
console.log(overFive);
