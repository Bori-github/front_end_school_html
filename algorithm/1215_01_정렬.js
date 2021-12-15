// 3. 정렬
// 3.1 선택정렬
let 입력값 = [199, 22, 33, 12, 32, 64, 72, 222, 233];
let 정렬된배열 = [];

let 길이 = 입력값.length;

// 주의사항 : pop을 하면 length가 줄어든다
// for (let i; i < 입력값.length; i++) {
//   console.log(입력값.pop());
//   console.log(i);
// }

for (let i = 0; i < 길이; i++) {
  정렬된배열.push(Math.min(...입력값));
}

// 3.1 삽입정렬
// 3.1 퀵정렬
