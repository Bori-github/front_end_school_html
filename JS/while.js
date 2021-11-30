// let i = 0;
// while (i < 10) {
//   console.log(i);
//   i++;
// }

let val = 1;
let sum = 0;
while (val < 101) {
  if (val % 2 == 0) {
    sum += val;
  }
  val++;
}

console.log(sum);

// 구구단 - 내 코드
// let i = 2;
// while (i < 10) {
//   let j = 1;
//   while (j < 10) {
//     console.log(`${i} X ${j} = ${i * j}`);
//     j++;
//   }
//   i++;
// }

// 반복문 내의 변수 초기화 어떻게 되는가?
let i = 0;
while (i <= 9) {
  //두번째 순회때 j가 있는지 확인
  if (i == 1) console.log(j);
  let j = 1;
  i++;
}

// 호준님 코드
let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}
