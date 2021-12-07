let obj = {};

console.log(obj.__proto__ === Object.prototype); // true

console.log(obj.toString === obj.__proto__.toString); //true
console.log(obj.toString === Object.prototype.toString); //true

let arr = [1, 2, 3];

// arr은 Array.prototype을 상속받았나요?
alert(arr.__proto__ === Array.prototype); // true

// arr은 Object.prototype을 상속받았나요?
alert(arr.__proto__.__proto__ === Object.prototype); // true

// 체인 맨 위엔 null이 있습니다.
alert(arr.__proto__.__proto__.__proto__); // null
