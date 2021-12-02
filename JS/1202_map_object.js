let m = new Map();

// Map에 값 넣기
m.set("하나", "one");
m.set("둘", "two");
m.set("셋", "three");

console.log(m);

// Map의 값에 접근하기
console.log(m.get("하나")); // one

console.log(m.keys()); // [Map Iterator] { '하나', '둘', '셋' }
console.log(m.values()); // [Map Iterator] { 'one', 'two', 'three' }
console.log(m.entries()); // [Map Entries] { [ '하나', 'one' ], [ '둘', 'two' ], [ '셋', 'three' ] }

// Map의 값의 존재 여부 확인
console.log(m.has("하나")); // true

// Map의 값을 제거
m.delete("하나");
console.log(m);

// Map의 크기 확인
console.log(m.length); // undefined
console.log(m.size); // 2

console.log(m.entries().length); // 2

let temp = new Map([
  [1, 10],
  [2, 20],
  [3, 30],
  [4, 40],
]);

console.log(temp);

for (let t of temp.keys()) {
  console.log(t);
}
