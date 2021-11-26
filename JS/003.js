// var 변수하나 = 20;
// var 변수둘 = 10;
// var 변수셋 = 2;

// document.write("변수하나 : ", 변수하나);
// document.write("<br>");
// document.write("변수둘 : ", 변수둘);
// document.write("<br>");
// document.write("변수셋 : ", 변수셋);
// document.write("<br>");
// document.write("변수하나+변수둘 : ", 변수하나 + 변수둘);
// document.write("<br>");
// document.write("변수하나-변수둘 : ", 변수하나 - 변수둘);
// document.write("<br>");
// document.write("변수하나/변수둘 : ", 변수하나 / 변수둘);
// document.write("<br>");
// document.write("변수하나*변수둘 : ", 변수하나 * 변수둘);
// document.write("<br>");
// document.write("변수하나**변수셋 : ", 변수하나 ** 변수셋);
// document.write("<br>");
// document.write("변수하나%변수셋 : ", 변수하나 % 변수셋);

//ES6
// const 이름 = "이호준";
// const 소속 = "제주코딩베이스캠프 운영진입니다.";

// let 주소 = "서울";
// 주소 = "제주";

// document.write(이름, "<br>");
// document.write(소속, "<br>");
// document.write(주소, "<br>");

// document.write(소속[2], "<br>");
// document.write(소속[3], "<br>");

//숫자형 (Number)
var num = 10;

document.write(num, "<br>"); // 10
document.write(num / 3, "<br>"); // 3.3333..
document.write(parseInt(num / 3), "<br>"); // 3

/* 숫자형의 사칙연산 */
document.write("더하기 : ", 2 + 2.5, "<br>"); // 4.5
document.write("빼기 : ", 5 - 7, "<br>"); // -2
document.write("곱하기 : ", 3 * 2, "<br>"); // 6
document.write("나누기 : ", 2 / 2, "<br>"); // 1

/*특수 숫자 값*/
document.write("무한대 : ", 1 / 0, "<br>"); // Infinity 거의 쓸 일이 없다
document.write("숫자가 아님" / 2, "<br>");
// NaN, 문자열을 숫자로 나누면 오류가 발생합니다.
document.write(typeof NaN === "number", "<br>"); // true

// let number = 1e9;
// let number = 123e-5;
// let number = 1.23e9;
// let number = 0b1010; //0, 1 -> 10
// let number = 0o12; //0 ~ 7 -> 10
// let number = 0xff; //0 ~ f -> 10
// let number = parseInt('13', 10)
let number = parseFloat("13.3px.10", 10);
let number2 = parseFloat("r13.3px.10", 10);
// parseFloat 소수가 아닌 것을 소수인 것으로 바꿔줌
// "13.3px.10" => 문자인데 작동한다 => parseFloat이 아는 부분까지만 나타냄

document.write(number, "<br>");
document.write(number2, "<br>");
document.write(0.1 + 0.2 == 0.3, "<br>");
document.write(9999999999999999999, "<br>");
