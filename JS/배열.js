// Array Method

let number = "010.1000.1000";

// console.log(number.split("."));
console.log(number.split(".").join("-"));

let 과일 = ["사과", "귤", "배"];

과일.unshift("천혜향");

console.log(과일);

과일.shift();
console.log(과일);

과일.splice(1);
console.log(과일);

과일 = ["복숭아", "딸기", "바나나"];
let 제주과일 = ["귤", "한라봉", "천혜향"];

// 과일.concat(제주과일);
console.log(과일.concat(제주과일)); // [ '복숭아', '딸기', '바나나', '귤', '한라봉', '천혜향' ]
console.log(제주과일.concat(과일)); // [ '귤', '한라봉', '천혜향', '복숭아', '딸기', '바나나' ]

let data = [10, 20, 30, 11, 22, 25, 111];

// sort = 오름차순, ASCII 문자 순서로 정렬
data.sort();
console.log(data);

// data.reduce((a, b) => a - b);
console.log(data.sort((a, b) => a - b));

data = [10, 20, 30, 11, 22, 25, 111];
// reverse = 역순, 역정렬이 아님
console.log(data.reverse());
