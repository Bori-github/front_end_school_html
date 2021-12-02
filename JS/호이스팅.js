console.log(add(10, 20));
console.log(add2(30, 40));
// 호이스팅 되어서 위로 올라갑니다!
function add(x, y) {
  return x + y;
}

// 함수 표현식은 호이스팅 되지 않습니다!
let multi = function (a, b) {
  return a * b;
};
console.log(multi(10, 20));

function add2(x, y) {
  return x + y;
}
