// https://tech.kakao.com/2019/10/02/kakao-blind-recruitment-2020-round1/
// 문제 1
// aabbaccc => a, a, b, b, a, c, c, c => 2a2ba3c
// aabbaccc => aa, bb, ac, cc => aabbaccc
// aabbaccc => aab, bac, cc => aabbaccc
// aabbaccc => aabb, accc => aaddaccc
"aabbaccc".match(/[a-z]{1}/g); // ['a', 'a', 'b', 'b', 'a', 'c', 'c', 'c']
"aabbaccc".match(/[a-z]{2}/g); // ['aa', 'bb', 'ac', 'cc']

// step 1
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push(도달한사람수);
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// step 2
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    let 확률 = 도달한사람수 / 유저수;
    유저수 -= 도달한사람수;
    실패율.push({ stage: i, 확률: 확률 });
  }
  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// [
//     {stage: 1, 확률: 0.125},
//     {stage: 2, 확률: 0.42857142857142855},
//     {stage: 3, 확률: 0.5},
//     {stage: 4, 확률: 0.5},
//     {stage: 5, 확률: 0}
// ]

// result
// [3, 4, 2, 1, 5]

// step 3
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 1; i <= 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    let 확률 = 도달한사람수 / 유저수;
    유저수 -= 도달한사람수;
    실패율.push({ stage: i, 확률: 확률 });
  }

  // sort의 내림차순
  // b - a
  // sort의 오름차순
  // a - b
  실패율.sort((a, b) => {
    if (a.확률 === b.확률) {
      return a.stage - b.stage;
    } else {
      return b.확률 - a.확률;
    }
  });

  return 실패율.map((object) => object.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);

// 번외
// 입력 예시 : aaabbcccccca
// 출력 예시 : a3b2c6a1

let s = "aaabbcccccca";
let 압축 = "";
for (const index in s) {
  let count = 1;
  if (s[i] === s[i + 1]) {
    index += 1;
  } else if (count === 1) {
    압축 += `1{${s[index]}}`;
  } else if (count >= 1) {
    압축 += `${s[index]}${count}`;
    count = 1;
  }
}

console.log(압축);

// step 1
function solution(s) {
  let answer = s.length;
  let len = s.length;

  for (let i = 1; i < len / 2 + 1; i++) {
    const re = new RegExp(`[a-z]{${i}}`, "g");
    console.log(re);
    let 잘린문자열 = s.match(re);
    console.log(잘린문자열);
  }
  return answer;
}

solution("aabbaccc");

// step 2
function solution(s) {
  var answer = s.length;
  let len = s.length;

  if (len === 1) return 1;

  for (let i = 1; i <= len / 2 + 1; i++) {
    //자르는 크기
    const re = new RegExp(`[a-z]{${i}}`, "g");
    console.log(re);
    let 잘린문자열 = s.match(re);
    console.log(잘린문자열);
    압축문자열 = "";
    let count = 1; //2a2b3c 여기서 앞에 나오는 숫자
    for (j = 0; j < 잘린문자열.length; j++) {
      if (잘린문자열[j] === 잘린문자열[j + 1]) {
        //aa -> 2a // 뒤에 값을 봐서 같은지!
        count += 1;
      } else if (count === 1) {
        압축문자열 += `${잘린문자열[j]}`;
      } else if (count > 1) {
        // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
        압축문자열 += `${count}${잘린문자열[j]}`;
        // 앞 문자열과 뒤 문자열이 다른 경우는
        count = 1;
      }
      console.log(압축문자열);
    }
    console.log(압축문자열);
  }
  return answer;
}

solution("aabbaccc");
solution("aabbaabbaccc"); // accc를 추가하지 못하는 문제 발생

// step 3
function solution(s) {
  var answer = s.length;
  let len = s.length;

  if (len === 1) return 1;

  for (let i = 1; i <= len / 2 + 1; i++) {
    //자르는 크기
    const re = new RegExp(`[a-z]{${i}}`, "g");
    // console.log(re)
    let 잘린문자열 = s.match(re);
    // console.log(잘린문자열)
    압축문자열 = "";
    let count = 1; //2a2b3c 여기서 앞에 나오는 숫자
    for (j = 0; j < 잘린문자열.length; j++) {
      if (잘린문자열[j] === 잘린문자열[j + 1]) {
        //aa -> 2a // 뒤에 값을 봐서 같은지!
        count += 1;
      } else if (count === 1) {
        압축문자열 += `${잘린문자열[j]}`;
      } else if (count > 1) {
        // 왜 1보다 크냐면 aa가 1a1a가 아니기 때문!
        압축문자열 += `${count}${잘린문자열[j]}`;
        // 앞 문자열과 뒤 문자열이 다른 경우는
        count = 1;
      }
      // console.log(압축문자열);
    }
    if (len % i !== 0) {
      압축문자열 += s.slice(-len % i);
    }
    // console.log(압축문자열);
    answer = Math.min(answer, 압축문자열.length);
  }
  return answer;
}

solution("aabbaccc");
solution("aabbaabbaccc"); // accc를 추가하지 못하는 문제 발생

// 번외
// 입력 예시: aaabbcccccca
// 출력 예시: a3b2c6a1

let s = "aaabbcccccca";
let 압축 = "";
let count = 1;

for (let i = 0; i < s.length; i++) {
  if (s[i] === s[i + 1]) {
    count += 1;
  } else if (count >= 1) {
    압축 += `${s[i]}${count}`;
    count = 1;
  }
}

console.log(압축);

// why?
// for (const index in s) {
//     console.log(s[index] === s[index+1])
//     console.log(s[index], s[index+1])
//     // if (s[index] === s[index + 1]){
//     //     count += 1
//     // } else if (count >= 1) {
//     //     압축 += `${s[index]}${count}`;
//     //     count = 1;
//     // }
// }
