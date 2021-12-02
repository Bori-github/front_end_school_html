// 배열
var trees = new Array("redwood", "bay", "cedar", "oak", "maple");
console.log(0 in trees); // true를 반환합니다.
console.log(3 in trees); // true를 반환합니다.
console.log(1 + 2 in trees); // true를 반환합니다. 연산자 우선 순위에 의하여 이 구문의 괄호는 없어도 됩니다.
console.log(6 in trees); // false 반환합니다.
console.log("bay" in trees); // false 반환합니다. 당신은 배열의 내용이 아닌, 인덱스 값을 명시하여야 합니다.
console.log("length" in trees); // true를 반환합니다. length는 Array(배열) 객체의 속성입니다.

// 미리 정의된 객체
console.log("PI" in Math); // true를 반환합니다.
console.log("P" + "I" in Math); // true를 반환합니다.

// 사용자가 정의한 객체
var myCar = {
  company: "Lamborghini",
  model: "Lamborghini Veneno Roadster",
  year: 2014,
};
console.log("company" in myCar); // true를 반환합니다.
console.log("model" in myCar); // true를 반환합니다.
