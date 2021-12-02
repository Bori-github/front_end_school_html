// call by value
console.log("--call by value--");
function change(parameter) {
  console.log(Object.is(parameter, num)); // true => parameter와 num이 같은 값을 가리키고 있다.

  parameter += 10;
  // parameter의 값이 바뀌면 parameter와 num의 메모리 주소가 달라진다
  console.log(Object.is(parameter, num)); // false => parameter != num

  return parameter;
}

let num = 0;
// change함수에 num을 전달,
console.log(change(num)); // 10 이 반환됨

// 원본 값인 num이 change함수에 의해 바꼈는지 확인
console.log(num); // 0 => 쨔잔 안바뀜! 원본값은 안 바뀜!

// call by reference
console.log("--call by reference--");

function changeObj(primitive, object) {
  console.log(Object.is(primitive, prm_num)); // true
  console.log(Object.is(object, obj)); // true => 같은 메모리 주소를 가리킴

  console.log(prm_num); // 0
  console.log(obj); // { name: 'Name', age: 'Age' }

  primitive += 10;

  object.name = "Changed Name";
  object.age = "Changed Age";

  console.log(Object.is(primitive, prm_num)); // false
  console.log(Object.is(object, obj)); // true => 여전히 같은 메모리 주소를 가리킴

  console.log(primitive); // 10
  console.log(prm_num); // 0 => 원본 값 바뀌지 않음
  console.log(obj); // { name: 'Changed Name', age: 'Changed Age' } => 원본 데이터 바뀜
}

let prm_num = 0;
let obj = {
  name: "Name",
  age: "Age",
};

changeObj(prm_num, obj);

console.log(prm_num); // 0
console.log(obj); // { name: 'Changed Name', age: 'Changed Age' }

// call by sharing
console.log("--call by sharing--");

function changeEmptyObj(obj) {
  obj = { item1: "Changed item1" }; //  obj 주소 재할당
  obj.item2 = "Changed item2"; // 주소 재할당 된 obj의 item2 변경

  console.log(obj); // { item1: 'Changed item1', item2: 'Changed item2' } => 주소 재할당 된 obj
}

let originalObj = { item1: "item1", item2: "item2" };

changeEmptyObj(originalObj);
console.log(originalObj); // { item1: 'item1', item2: 'item2' } => 원본 데이터는 변하지 않음
