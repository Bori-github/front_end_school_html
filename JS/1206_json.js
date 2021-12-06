// JSON 기본적인 형태
let hero = {
  squadName: "슈퍼히어로",
  members: [
    {
      name: "아이언맨",
      age: 29,
      본명: "토니 스타크",
    },
    {
      name: "헐크",
      age: 39,
      본명: "부르스 배너",
    },
  ],
};

let student = {
  name: "John",
  age: 30,
  isAdmin: false,
  courses: ["html", "css", "js"],
  wife: null,
};

let json = JSON.stringify(student);
console.log(json); // {"name":"John","age":30,"isAdmin":false,"courses":["html","css","js"],"wife":null}
console.log(typeof json);

console.log(JSON.stringify(student, null, 4)); // 들여쓰기 4칸
console.log(JSON.stringify(student, null, 2)); // 들여쓰기 2칸

console.log(JSON.stringify("test")); // "test"
