// map
// https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// mdn 예제
let array = [1, 4, 9, 16];
let 값1 = array.map((x) => x * 2);

console.log(array);
console.log(값1);

function 제곱(x) {
  return x ** 2;
}
값2 = array.map(제곱);
console.log(값2);
// sqrt = square root
console.log(array.map(Math.sqrt).map((x) => x ** 3));

let data = [
  {
    반: 1,
    번: 1,
    이름: "호준",
    중간고사점수: 55,
  },
  {
    반: 1,
    번: 2,
    이름: "길동",
    중간고사점수: 60,
  },
  {
    반: 1,
    번: 3,
    이름: "영희",
    중간고사점수: 30,
  },
  {
    반: 1,
    번: 4,
    이름: "철수",
    중간고사점수: 20,
  },
  {
    반: 1,
    번: 5,
    이름: "규리",
    중간고사점수: 100,
  },
];

let midScore = data.map((x) => x.중간고사점수);
let totalMidScore = 0;
midScore.forEach((score) => (totalMidScore += score));
avrMidScore = totalMidScore / data.length;
console.log(avrMidScore);

let data2 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
undefined;
let newData = data2.map((a) => a.map((n) => n * 2));
