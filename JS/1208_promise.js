// 모던자바스크립트 예제
let promise = new Promise(function (resolve, reject) {
  // 프라미스가 만들어지면 executor 함수는 자동으로 실행됩니다.

  // 1초 뒤에 일이 성공적으로 끝났다는 신호가 전달되면서 result는 'done'이 됩니다.
  setTimeout(() => resolve("끝남!"), 10000);
});
console.log("hello world");
console.log(promise); // [Done] exited with code=0 in 10.139 seconds
