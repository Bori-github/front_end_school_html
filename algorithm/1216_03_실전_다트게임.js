////
// 다트 게임
// https://tech.kakao.com/2017/09/27/kakao-blind-recruitment-round-1/

testcase = ["1S2D*3T", "1D2S#10S", "1D2S0T"];

for (const c of testcase) {
  console.log(solution(c));
}

// 37, 9, 3

//step1
const dartResult = "1S2D3T";
let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
  // console.log(dartResult[i]);
  if (dartResult[i] >= 0 && dartResult[i] <= 9) {
    temp = parseInt(dartResult[i]);
  } else if (dartResult[i] == "S") {
    answer.push(temp);
  } else if (dartResult[i] == "D") {
    // answer.push(Math.pow(temp, 2));
    answer.push(temp ** 2);
  } else if (dartResult[i] == "T") {
    // answer.push(Math.pow(temp, 3));
    answer.push(temp ** 3);
  }
}

console.log(answer);

//step2
const dartResult = "1D2S#10S";
let answer = [];
let result = 0;
let temp = 0; // 임시점수

for (let i = 0; i < dartResult.length; i++) {
  // console.log(dartResult[i]);
  if (dartResult[i] >= 0 && dartResult[i] <= 9) {
    if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
      temp = 10;
      i++;
    } else {
      temp = parseInt(dartResult[i]);
    }
  } else if (dartResult[i] == "S") {
    answer.push(temp);
  } else if (dartResult[i] == "D") {
    // answer.push(Math.pow(temp, 2));
    answer.push(temp ** 2);
  } else if (dartResult[i] == "T") {
    // answer.push(Math.pow(temp, 3));
    answer.push(temp ** 3);
  } else if (dartResult[i] == "*") {
    answer[answer.length - 1] *= 2;
    answer[answer.length - 2] *= 2;
  } else if (dartResult[i] == "#") {
    answer[answer.length - 1] *= -1;
  }
}
for (let i = 0; i < answer.length; i++) {
  result += answer[i];
}

console.log(answer);

// step3
function solution(dartResult) {
  let answer = [];
  let result = 0;
  let temp = 0; // 임시점수

  for (let i = 0; i < dartResult.length; i++) {
    // console.log(dartResult[i]);
    if (dartResult[i] >= 0 && dartResult[i] <= 9) {
      if (dartResult[i] == 1 && dartResult[i + 1] == 0) {
        temp = 10;
        i++;
      } else {
        temp = parseInt(dartResult[i]);
      }
    } else if (dartResult[i] == "S") {
      answer.push(temp);
    } else if (dartResult[i] == "D") {
      // answer.push(Math.pow(temp, 2));
      answer.push(temp ** 2);
    } else if (dartResult[i] == "T") {
      // answer.push(Math.pow(temp, 3));
      answer.push(temp ** 3);
    } else if (dartResult[i] == "*") {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dartResult[i] == "#") {
      answer[answer.length - 1] *= -1;
    }
  }
  for (let i = 0; i < answer.length; i++) {
    result += answer[i];
  }
  return result;
}
