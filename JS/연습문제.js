// 1번
let nums = [10, 20, 30, 10, 20, 30, 40, 10];
let total = 0;

// 평균
for (let num of nums) {
  total += num;
}

let avr = total / nums.length;
console.log(avr);

// 분산
let total2 = 0;
for (let num of nums) {
  num = (num - avr) ** 2;
  total2 += num;
}

console.log(total2 / nums.length);

// 2번 str의 평균 구하기
let str = "5, 4, 10, 2, 5";
let sum = 0;

str = str.split(",");

for (let num of str) {
  sum += parseInt(num);
}
console.log(sum / str.length);
