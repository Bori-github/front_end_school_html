# Javascript Cheet Sheet

### 변수(타입)

- 변수(variable) : 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'

### 선언

- `var x` : 전역에서 사용할 변수값, 실무에서 되도록 사용하지 않음
- `let x` :
- `const x` :

### Number(숫자)

- 형태 : 10, 3.14
- 호출 : 변수명

### String(문자열)

- 형태 : ‘abd’, "abd", `abd`
- 호출 : 변수명[0]

### Array(배열)

- 형태 : [‘하나’, ‘둘’, ‘셋’], [100, 200, 300]
- 호출 : 변수명, 변수명[0], 변수명[0][0] => 변수명[index]

### Boolean(논리값)

- 형태 : true, false
- 호출 : 변수명

### Object(객체)

- 형태 : {
  “이름”: “이보리”,
  “나이”: 20,
  “직업”: null
  }
- 호출 : 변수명, 변수명.이름, 변수명["이름"] => 변수명.key, 변수명[key]

### undefined

- 형태 : undefined

### null

- 형태 : object

### NaN

- 형태 : number

  ***

## 연산자

### 기본 연산자

| 기호 | 설명            |
| :--: | :-------------- |
| `+`  | 덧셈            |
| `-`  | 뺄셈            |
| `*`  | 곱셈            |
| `/`  | 나눗셈의 몫     |
| `%`  | 나눗셈의 나머지 |
| `**` | 거듭 제곱       |
| `++` | 증가 연산자     |
| `--` | 감소 연산자     |

### 논리연산자

|  기호  | 설명 |
| :----: | :--- |
|  `!`   | NOT  |
|  `&&`  | AND  |
| `\|\|` | OR   |

### 비교연산자: ==, !=, ===, !==, >, >=, <, <=

### 조건문: if, else, else if, switch

### 반복문: for, for in, for of, forEach, while, do while, break, continue

```javascript
let a = [10, 20, 30, 40];

for(let i = 0; i < 10; i++) {
  console.log(i);
}
for (let i of a) {
  console.log(i);
}
for (let i in a) {
  console.log(i);
}

let x = 0;
while (x < 10) {
  console.log(x);
  x++;
}
do {
  console.log(x);
  x++;
} while (x < 10)

a.forEach(e => console.log(e\*\*2));

for(let I = 0; I < 10; I++) {
  if (i == 5) {
    break;
  }
}

for(let I = 0; I < 10; I++) {
  if (i == 5) {
    continue;
  }
  console.log(i);
}
```

@ 함수 / 메서드 구분
둘 다 괄호 안에 들어가서 연산이 되어 나오는 것
이것을 구분하 수 있는 것은 클래스 가서 배울 수 있다.

## 함수

### 함수

- 매개변수(파라미터) : x, y
- 전달인자(아규먼트) : 3, 5

```javascript
// 함수 선언(Function Declaration)
function add(x, y) {
  return x + y;
}

add(3, 5); // 8

// 함수 표현식(function Expression)
let add = function (x, y) {
  return x + y;
};
```

- 콜백함수 : 함수를 인자 값으로 전달해서 "나중에 호출(call back)"해서 사용하는 것

```javascript
function mul(x, y) {
  return x * y;
}

function cal(a, b) {
  return a(10, 10) + b(10, 10);
}

cal(add, mul); // 120
```

- 화살표함수

```javascript
let addArrow = (x, y) => x + y;
```

- 익명함수 : 함수를 변수에 저장하는 함수, 이름이 없다고 생각하기보다는 함수명 대신 변수명을 사용하여 호출

- 기명함수

객체
선언
할당
매개변수

### 구문(Syntax)

- 어떤 일을 하기 위해 실행

상수
리턴
인수

### console.log

### 디버깅

- 버그를 잡는 행위

### Statement

- 하나 혹은 여러 개의 표현식이 모여 문장을 이룸.
- 모든 표현식은 문장이 될 수 있음.
- (보통) 문장의 끝에는 세미 콜론(;)을 붙임
  ex) true; , 23; , 1000+900+90+4; ...
- 한 줄에 문장이 하나인 경우에는 세미 콜론을 붙이지 않아도 문제가 없지만, 관례적으로 붙임
- 한 줄에 여러 문장을 적을 경우, 세미 콜론으로 문장을 구분
- 마지막 문장은 세미 콜론을 붙이지 않아도 문제가 없음.
- 마지막 문장의 결과가 반환
- 조건문(if), 반복문(for)도 문장 : 이경우에는 마지막 } 뒤에 세미콜론을 붙이지 않음
- 문장들이 모여 만들고자하는 프로그램이 됨.

### 리터럴

- 정리 필요

### DOM / BOM

- DOM : 문서를 찍어낼 수 있는 프린트 공장
  ref [얄팍한 코딩사전](https://youtu.be/1ojA5mLWts8)

### 정규표현식

- 특정한 문자열을 찾을 수 있는 표현식

### 블록스코프

```javascript
if (true) {
  let x = 100;
}

console.log(x); // not defined x
```

### 전개 표현식(...)

```javascript
let x = [1, 2, 3, 4, 5];
function add(...x) {
  return x;
}
```
