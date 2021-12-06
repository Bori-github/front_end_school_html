"use strict"; // 대부분 엄격모드를 사용하지 않는다

function test() {
  x = 10;
}

test();

console.log(x); // 엄격 모드가 아닌 경우, 10이 출력됨. 에러가 발생하지 않는다

// 엄격 모드일 경우, ReferenceError: x is not defined
