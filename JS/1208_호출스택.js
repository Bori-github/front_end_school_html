function one() {
  two();
}
function two() {
  three();
}
function three() {
  console.log("end");
}

// 스택에 쌓여 있는 순서
// three() => 위
// two()
// one()
// anonymous => 아래 : 가상 전역 컨텍스트, 이것도 마지막에 빠짐

console.log(1);
setTimeout(function () {
  console.log(2);
}, 1000); // setTimeout(()=> console.log(2), 1000)
console.log(3);
