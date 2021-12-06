let arr = [1, 2, 3, 4, 5];

// reduce는 오래된 문법 => 요즘은 대체 용법이 많이 나왔다 forEach 같은
let result1 = arr.reduce((sum, curr) => sum + curr);
let result2 = arr.reduce((sum, curr) => sum * curr);

console.log(result1); // 15
console.log(result2); // 120
