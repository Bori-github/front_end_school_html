// 플랫폼에 익숙해져야 한다.
// 사용가능한 라이브러리 미리 확인
// 언어선택 (속도 : c++, 풀이: python)
// 코드 스니펫(트리, 검색, 순열, 조합, 최단경로(eg 다익스트라)), Cheat sheet와 종이 미리 준비
// 유용한 라이브러리 미리 정리
// 예외처리 하기

// 5 ~ 6 시간
// 6 ~ 7 문제

// 2시간씩 2문제
// 30분씩 4문제

// 몸풀기 2문제 - 1번

// https://codingdojang.com/scode/393?answer_mode=hide
// 1부터 10,000까지 8이라는 숫자가 총 몇번 나오는가?

// 8이 포함되어 있는 숫자의 갯수를 카운팅 하는 것이 아니라 8이라는 숫자를 모두 카운팅 해야 한다.
// (※ 예를들어 8808은 3, 8888은 4로 카운팅 해야 함)

// 빈 배열 만드는 방법
Array(10);
let x = Array(10);
x[2] = undefined;
x[3] = null;
x;
// [비어있음 x 2, undefined, null, 비어있음 x 6]
x.length = 20;
x;
// [비어있음 x 2, undefined, null, 비어있음 x 16]
Array(10).fill(0);
Array(10).fill(10);
// Array(100).fill().map((_, i) => i + 1)
// [...Array(100)].map((_, i) => i + 1)
Array(100)
  .fill(1)
  .map((val, idx) => val + idx);
".".repeat(10);
".".repeat(10).split("."); // lenght : 11
".".repeat(9).split("."); // lenght : 10
Array.from("abc");
Array.from("a", repeat(10));
Array.from("ab", repeat(10));

Array(100)
  .fill(1)
  .map((val, idx) => val + idx) + "";
(
  Array(100)
    .fill(1)
    .map((val, idx) => val + idx) + ""
).split("8").length - 1; // 8이 1개인 경우 8을 기준으로 나뉘면서 배열이 2개로 쪼개짐 => length - 1을 하는 이유

// 몸풀기 2문제 - 2번

// https://codingdojang.com/scode/408?langby=javascript#answer-filter-area
// 1차원의 점들이 주어졌을 때, 그 중 가장 거리가 짧은 것의 쌍을 출력하는 함수를 작성하시오. (단 점들의 배열은 모두 정렬되어있다고 가정한다.)

// 예를들어 S={1, 3, 4, 8, 13, 17, 20} 이 주어졌다면, 결과값은 (3, 4)가 될 것이다.

let s = [1, 3, 4, 8, 13, 17, 20];
let arr = new Array();
for (let i = 0; i < s.length - 1; i++) {
  console.log(s[i + 1] - s[i]);
}
