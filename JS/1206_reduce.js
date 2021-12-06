let arr = [1, 2, 3, 4, 5];

// reduce는 오래된 문법 => 요즘은 대체 용법이 많이 나왔다 forEach 같은
let result1 = arr.reduce((sum, curr) => sum + curr);
let result2 = arr.reduce((sum, curr) => sum * curr);

console.log(result1); // 15
console.log(result2); // 120

let sum = 0;
console.log(arr.forEach((i) => (sum += i))); // undefined 반환값이 없으므로
console.log(sum); // 15

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991
console.log(Number.EPSILON); // 2.220446049250313e-16

console.log(0.3 + 0.6); // 0.8999999999999999 입실론의 오차만큼 허용해주자

let arr2 = [1, 2, 3, 4, 5, [1, 2, 3, 4, 5, [1, 2, 3, 4, 5]]];
console.log(arr2.flat()); // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, [ 1, 2, 3, 4, 5 ] ]
console.log(arr2.flat(2)); // [ 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5 ]
