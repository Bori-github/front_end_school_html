let arr = [1, 2, 3, 4];
let arr2 = arr;

console.log(arr);
console.log(arr2);

console.log(Object.is(arr, arr2)); // true

arr2[1] = 10;

console.log(arr);
console.log(arr2);

console.log(Object.is(arr, arr2)); // true

arr2 = [3, 4, 5, 6];

console.log(Object.is(arr, arr2)); // false
