function sayName() {
  console.log(this.name); // 여기서 this 는 전역 객체를 가리킨다
}

var name = "Hero";

let peter = {
  name: "Peter Parker",
  sayName: sayName,
};

let bruce = {
  name: "Bruce Wayne",
  sayName: sayName,
};

sayName(); // undefined 전역에서 호출되었으므로 this는 window
peter.sayName(); // Peter Parker
bruce.sayName(); // Bruce Wayne

// this 조작
peter.sayName.call(bruce); // Bruce Wayne
