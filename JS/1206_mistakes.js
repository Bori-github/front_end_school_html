// 2 ** 3 ** 2 => 프리디어가 자동으로 괄호를 넣어줌
console.log(2 ** (3 ** 2)); // 512 => 괄호를 넣지 않으면 뒤에부터 계산
console.log((2 ** 3) ** 2); // 64
console.log(3 ** 2); // 9
console.log(2 ** 9); // 512

console.log(Math.pow((2, 3), 2));

let s = "study javascript bori.lee";
console.log(s.split(" ")); // [ 'study', 'javascript', 'bori.lee' ]
console.log(s.split(".")); // [ 'study javascript bori', 'lee' ]
console.log(s.split("/s/")); // /\s/ => 이거 자꾸 안들어가
console.log(s.split("")); // 모든 글자 쪼갬

// string 숫자 array로 반환
let nums = "123456778".split("").map((x) => parseInt(x));
let sum = 0;
console.log(nums); // [1, 2, 3, 4, 5, 6, 7, 7, 8]

nums.forEach((val) => (sum += val));

nums.map((val) => (sum += val)); // 43

console.log(sum); // 43
