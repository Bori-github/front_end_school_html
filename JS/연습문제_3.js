// arr의 각 자리수의 합
let arr = [11, 22, 33, 111, 2];

let newArr = arr.join("");

let total = 0;
for (let i of newArr) {
  total += +i;
}

console.log(total);

let str = arr + "";
str = str.replace(/,/g, "");
console.log(str);
