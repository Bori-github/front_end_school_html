let person = {
  //key: value
  name: "이보리",
  age: 10,
  height: 30,
  weight: 40,
  이력: { 첫번째직장: "하나", 두번째직장: "둘" },
  10: 100, // 키 값을 이런 방식으로 사용하는 것은 지양한다
};

console.log(person);
console.log(person["name"]); // name에 따옴표가 없다면 name이라는 변수를 찾게되므로 에러가 발생
console.log(person.name); // 마침표는 접근 연산자이므로 따옴표가 없어도 가능
console.log(person["10"]); // 이런 방식으로 사용하는 것은 지양한다

console.log(Object.keys(person)); // 키만 배열로 반환
console.log(Object.values(person)); // 값만 배열로 반환
console.log(Object.entries(person)); // 배열 안에 배열로 키와 값을 반환 -

let data = Object.entries(person); // 반복문에 사용하기 좋다

for (let i of data) {
  console.log(i[0], i[1]);
}

for (let [i, j] of [
  [1, 2],
  [3, 4],
]) {
  console.log(i, j);
}

for (let [[i, j], k] of [
  [[1, 2], 2],
  [[1, 2], 4],
]) {
  console.log(i, j, k);
}

console.log(Object.getOwnPropertyDescriptors(person, "name"));
