// Math.random() : 0.0이상 1.0 미만 사이의 값을 반환하는 함수

console.log(Math.random() * 10);
console.log(Math.floor(Math.random() * 10)); // 10미만의 수 만 나온다 + 1을 줘야한다

console.log(Math.floor(Math.random() * 5)); // 0 ~ 4

console.log(Math.floor(Math.random() * 5) + 3); // 3 ~ 7

console.log("--randomNum Function--");
// min이상 max 미만
function randomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let lottoNum = new Set();

while (lottoNum.size < 6) {
  lottoNum.add(randomNum(1, 46));
}

console.log([...lottoNum].sort((a, b) => a - b));
