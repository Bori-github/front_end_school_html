// x가 [10, 20, 30]의 주소값을 가리키고 있다
let x = [10, 20, 30];
function test(a) {
  // x의 주소값을 받는다
  a[0] = 10000;
}

test(x);
console.log(x); // [ 10000, 20, 30 ] 값이 변경됨
// 배열이나 오브젝트를 넘길 때 주의해야 한다.
// 원본에 영향이 있으므로

// y는 10을 가리킴
let y = 10;
function test2(a) {
  a = 10000; // a가 10을 가리키다가 10000이 할당된 순간 10이 아닌 10000을 가리키게 된다.
}

test2(y);
console.log(y); // 10 값이 변하지 않는다

let v = 100;

function test3(a) {
  a = 1000;
  console.log("난 v야", v);
  console.log("난 a야", a);
}

test3(v);
console.log(v);
