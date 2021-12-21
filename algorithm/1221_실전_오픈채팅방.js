// 2. 19년도
// 링크 : https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 1번 오픈채팅방 문제

let test = ["A 10 !", "B 20 !", "A 22 @", "B 20 @", "A 21 @"];

let result = [];

test.forEach((el) => {
  const [하나, 둘, 셋] = el.split(" ");
  if (하나 === "A") {
    if (둘 >= 20) {
      result.push([둘, 셋]);
    }
  }
});

// result;

// step 1
// let record = [
//   "Enter uid1234 Muzi",
//   "Enter uid4567 Prodo",
//   "Leave uid1234",
//   "Enter uid1234 Prodo",
//   "Change uid4567 Ryan",
// ];

// function solution(record) {
//   let answer = [];
//   let users = {};

//   for (const iterator of record) {
//     const [상태, 아이디, 닉네임] = iterator.split(" ");
//     answer.push([상태, 아이디, 닉네임]);
//   }

//   return answer;
// }

// solution(record);

// step 2
let record = [
  "Enter uid1234 Muzi",
  "Enter uid4567 Prodo",
  "Leave uid1234",
  "Enter uid1234 Prodo",
  "Change uid4567 Ryan",
];

function solution(record) {
  let result = [];
  let answer = [];
  let 유저정보 = {};

  for (const iterator of record) {
    const [상태, 아이디, 닉네임] = iterator.split(" ");
    if (상태 === "Enter") {
      유저정보[아이디] = 닉네임;
      result.push([아이디, "님이 들어왔습니다."]);
    } else if (상태 === "Leave") {
      result.push([아이디, "님이 나갔습니다."]);
    } else if (상태 === "Change") {
      유저정보[아이디] = 닉네임;
    }
  }

  // 지금 우리 데이터
  // [[uid1234, 님이 들어왔습니다.], [uid4567, 님이 들어왔습니다.]]

  for (const [아이디, 메시지] of result) {
    answer.push(유저정보[아이디] + 메시지);
  }

  return answer;
}

solution(record);
