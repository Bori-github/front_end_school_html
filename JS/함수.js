function func_1() {
  let x = 10;
  console.log("function 1 호출");
}

function func_2() {
  let y = 10;
  console.log("function 2 호출");
}

func_1();
func_2();

let k = 10;
function viewk() {
  console.log(k);
}

function changek() {
  k += 10;
  console.log(k);
}

viewk(); // 10
changek(); // 20
viewk(); // 20

function diffk() {
  // diffk내의 k 와 함수 밖의 k는 서로 다른 k이다
  let k = 100;
  console.log(k);
}

console.log(k); // 20

// 파라미터에 기본값을 설정함
function add(a = 100, b = 200) {
  return console.log(a + b);
}

add(10, 20); // 30
add(10); // 210
add(); // 300
add((b = 300)); // 500 add(b=300, b=200) a = 100에 b = 300이 들어가서 실행됨
add(undefined, 300); // 400 undefined하면 디폴트로 반영

// 구조분해할당도 기본값을 설정할 수 있으니까 매개변수를 객체로 받으면 어떨까요??
function add2({ a = 100, b = 200 }) {
  console.log(a + b);
}

add2({ b: 300 }); // 400

let c = 100;
let d = 200;

// let obj = {c:"c", d:"d"} 와 동일한 의미
// 키와 value값이 같은 경우의 es 6부터 value의 값은 생략가능한 원리
let obj = { c, d };
console.log(obj);

let foo = function mul(a, b) {
  return a * b;
};

let division = function (a, b) {
  return a / b;
};

console.log(foo(3, 4)); // 12
// console.log(mul(3, 4)); // ReferenceError: mul is not defined

console.log(division(4, 2)); // 2
