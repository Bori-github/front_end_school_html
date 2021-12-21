// https://tech.kakao.com/2018/09/21/kakao-blind-recruitment-for2019-round-1/
// 2. 실패율

// 실패율 === 아직 클리어 못한 플레이어 수 / 도달한 플레이어 수
// 전체 스테이지의 개수 N
// 스테이지의 번호가 담긴 배열 stages가 매개변수

// 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담여있는 배열을 return하도록 solution 함수
// 만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.(오름차순)

// N  stages                     result
// 5  [2, 1, 2, 6, 2, 4, 3, 3]   [3,4,2,1,5]
// 4  [4,4,4,4,4]                [4,1,2,3]

// 스테이지에 도달한 사람의 수
// 1stage === 1
// 2stage === 3
// 3stage === 2
// 4stage === 1
// 5stage === 0

// 실패율
// 1stage === 1/8
// 2stage === 3/(8-1 = 7)
// 3stage === 2/(7-3 = 4)
// 4stage === 1/(4-2 = 2)
// 5stage === 0/(2-1 = 1)

// [2, 1, 2, 6, 2, 4, 3, 3].filter((user) => user === 3)
// 출력 결과 : (2) [3, 3]

// 변수명을 한글로 하면 어떤 변수에 대한 것인지 파악하기 쉽다
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 0; i < 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    실패율.push(도달한사람수);
  }

  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]); // (5) [0, 1, 3, 2, 1]

// step 2
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 0; i < 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    let 확률 = 도달한사람수 / 유저수;
    유저수 -= 도달한사람수;
    실패율.push({ stage: i, 확률: 확률 });
  }

  return 실패율;
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
// [
//   { stage: 0, 확률: 0 },
//   { stage: 1, 확률: 0.125 },
//   { stage: 2, 확률: 0.42857142857142855 },
//   { stage: 3, 확률: 0.5 },
//   { stage: 4, 확률: 0.5 },
// ];

// result [3, 4, 2, 1, 5]

// step 3
function solution(스테이지수, stages) {
  let 실패율 = [];
  let 유저수 = stages.length;

  for (let i = 0; i < 스테이지수; i++) {
    let 도달한사람수 = stages.filter((user) => user === i).length;
    let 확률 = 도달한사람수 / 유저수;
    유저수 -= 도달한사람수;
    실패율.push({ stage: i, 확률: 확률 });
  }

  // sort 내림차순 : b - a
  // sort 오름차순 : a - b
  // 확률 순으로 내림차순, 확률 같으면 스테이지 순으로 오름차순
  실패율.sort((a, b) => {
    if (a.확률 === b.확률) {
      return a.stage - b.stage;
    } else {
      return b.확률 - a.확률;
    }
  });

  return 실패율.map((el) => el.stage);
}

solution(5, [2, 1, 2, 6, 2, 4, 3, 3]);
