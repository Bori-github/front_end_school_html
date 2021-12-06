console.log(Math.PI); // 3.141592653589793
console.log(Math.SQRT2); // 1.4142135623730951

// 올림
console.log(Math.ceil(9.2)); // 10
console.log(Math.ceil(-9.2)); // -9 => 음수 사용시 주의

// 내림
console.log(Math.floor(0.3)); // 0
console.log(Math.floor(-9.2)); // -10

// 반올림
console.log(Math.round(3.5)); // 4
console.log(Math.round(3.6)); // 4
console.log(Math.round(3.4)); // 3

console.log(Math.max()); // -Infinity
console.log(Math.min()); // Infinity
console.log(Math.max(1, 2, 3, 1, 0.1)); // Infinity
console.log(Math.min(1, 2, 3, 1, 0.1)); // Infinity
console.log(Math.max([1, 2, 3, 1, 0.1])); // NaN
console.log(Math.max(...[1, 2, 3, 1, 0.1])); // 3
console.log(Math.max.apply(null, [1, 2, 3, 1, 0.1])); // 3
