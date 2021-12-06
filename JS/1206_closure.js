// 함수 하나를 계속 사용할 수 있다
// 재정의 할 필요 없이
function 제곱(x) {
  function 승수(y) {
    debugger;
    return y ** x;
  }
  return 승수;
}

// 위와 같은 코드 입니다
// function 제곱(x) {
//   return function(y) {
//       return y ** x
//   }
// }

// 제곱이라는 함수 1개로 제곱2, 제곱3을 따로 정의할 필요없이 사용할 수 있다.
let 제곱2 = 제곱(2); // x = 2
let 제곱3 = 제곱(3); // x = 3

console.log(제곱2(10)); // 100
console.log(제곱3(10)); // 1000

// 다른 예제
// 클로저는 함수 안에 함수를 선언
const x = 100;

function a() {
  const x = 1;
  b();
}

function b() {
  console.log(x);
}

a(); // 100
b(); // 100
