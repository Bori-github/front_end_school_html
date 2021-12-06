let s = "abcde";

// array 생성할 때 자주 사용하는 방법
console.log(s.repeat(2));
console.log(s.repeat(2.5));

let arr = Array.from("a".repeat(10));
console.log(arr);
console.log(Array.from("abc")); // [ 'a', 'b', 'c' ]
console.log(Array(10)); // [ <10 empty items> ]=> 이게 undefined 인가요?

let a = Array(10); // 비어있는 array 생성
a[3] = undefined;
console.log(a); // [ <3 empty items>, undefined, <6 empty items> ]

let arrFill = Array(10).fill(100);
console.log(arrFill);

// 자주 사용하는 방법
console.log(
  Array(100)
    .fill(0)
    .map((val, idx) => val + idx)
); // [0, 1, 2, 3, ... , 98, 99]

// console.log(
//   Array(100)
//     .fill(0)
//     .map((val, idx, arr) => arr)
// );

let double = Array(100)
  .fill(0)
  .map((val, idx) => (idx + 1) ** 2);

console.log(double);
