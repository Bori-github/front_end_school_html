// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// https://programmers.co.kr/learn/courses/30/lessons/17681?language=javascript
// 주제 : 2진법, 진법 연산, replace, or 연산
let n = 5;
arr1 = [9, 20, 28, 18, 11];
arr2 = [30, 1, 21, 17, 28];
// 출력 = ["#####","# # #", "### #", "# ##", "#####"]

let x = 9;
let y = 30;

x.toString(2); // '1001'
y.toString(2); // '11110'

("01001");
("11110");
("-----");
("11111");

let z = "11111";
z.replace(/1/g, "#").replace(/0/g, " "); // "## ##"

(9 | 30).toString(2).replace(/1/g, "#").replace(/0/g, " ").padStart(5, " ");
(9 & 30).toString(2).replace(/1/g, "#").replace(/0/g, " ").padStart(5, " ");
(5 | 3).toString(2).replace(/1/g, "#").replace(/0/g, " ").padStart(5, " ");
(31 | 40).toString(2).replace(/1/g, "#").replace(/0/g, " ").padStart(5, " ");

("00101");
("00011");
("-----");
("  ###");

// || - or
// && - and
// ! - not

100000 - 1 == 11111;

//////////
// 유틸리티
const zip = (a, b) => a.map((val, idx) => [val, b[idx]]);

const fillZero = (n, arr) => {
  return "0".repeat(n - arr.length + arr);
};
//////////

function solution(n, arr1, arr2) {
  let answer = [];
  const fillSpace = (n, arr) => {
    return " ".repeat(n - arr.length) + arr;
  };
  for (let i = 0; i < n; i++) {
    answer.push(
      fillSpace(
        n,
        (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ")
      )
    );
  }

  return answer;
}

// 다른 풀이 - 수정해야함
function solution(n, arr1, arr2) {
  let answer = [];

  const zip = (a, b) => a.map((val, idx) => [val, b[idx]]);
  const fillSpace = (n, arr) => {
    return " ".repeat(n - arr.length) + arr;
  };
  for (let [i, j] of zip(arr1, arr2)) {
    answer.push(
      fillSpace(
        n,
        (arr1[i] | arr2[i]).toString(2).replace(/1/g, "#").replace(/0/g, " ")
      )
    );
  }

  return answer;
}

// 2. 19년도
// 3. 20년도
// 4. 21년도
