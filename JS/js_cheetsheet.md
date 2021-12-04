# Javascript Cheet Sheet

### 🌽 변수(타입)

- typeof로 확인 가능
- 변수(variable) : 데이터를 저장할 때 쓰이는 '이름이 붙은 저장소'

#### `var x;`

- 전역에서 사용할 변수 값
- 블록 스코프가 아닌 함수 수준 스코프를 가짐
- 선언하기 전 사용할 수 있음
- 함수 스코프
- 실무에서 되도록 사용하지 않음

#### `let x;`

- `let`이 표준에 도입된 이유가 `var`의 부작용을 없애기 위함
- 재선언 불가, 재할당 가능
- 블록 스코프

#### `const x;`

- `const`로 선언한 변수를 '상수(constant)'라고 한다. 상수는 재할당 할 수 없다.
- 블록 스코프

#### Number(숫자)

- 형태 : 10, 3.14
- 호출 : 변수명

#### String(문자열)

- 형태 : ‘abd’, "abd", \`abd`
- 호출 : 변수명[0]

#### Array(배열)

- 형태 : [‘하나’, ‘둘’, ‘셋’], [100, 200, 300]
- 호출 : 변수명, 변수명[0], 변수명[0][0] => 변수명[index]

#### Boolean(논리값)

- 형태 : true, false
- 호출 : 변수명

#### Object(객체)

- 형태 : {
  “이름”: “이보리”,
  “나이”: 20,
  “직업”: null
  }
- 호출 : 변수명, 변수명.이름, 변수명["이름"] => 변수명.key, 변수명[key]

#### undefined : undefined

#### null : object

#### NaN : number

### 🌽 연산자

#### 기본 연산자

| 기호 | 설명            |
| :--: | :-------------- |
| `+`  | 덧셈            |
| `-`  | 뺄셈            |
| `*`  | 곱셈            |
| `/`  | 나눗셈          |
| `%`  | 나눗셈의 나머지 |
| `**` | 거듭 제곱       |
| `++` | 증가 연산자     |
| `--` | 감소 연산자     |

#### 논리연산자

|  기호  | 설명 |
| :----: | :--- |
|  `!`   | NOT  |
|  `&&`  | AND  |
| `\|\|` | OR   |

#### 비교연산자: ==, !=, ===, !==, >, >=, <, <=

#### 조건문: if, else, else if, switch

#### 반복문: for, for in, for of, forEach, while, do while, break, continue

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

### 🌽 함수

- 프로그램을 구성하는 주요 '구성 요소(building block)'
  => 함수를 이용해 중복없이 유사한 동작을 하는 코드를 여러 번 호출할 수 있다.

#### 매개변수(parameter) : x, y

#### 전달인자(argument) : 3, 5

#### 반환 값(return value)

- 함수를 호출했을 때 함수를 호출한 그곳에 특정 값을 반환하게 할 수 있다.
- 특정 값 = 반환 값
- `return`은 함수 내 어디서든 사용 가능
- `return`을 만나면 함수 실행이 즉시 중단되고 함수를 호출한 곳에 값을 반환

```javascript
// 함수 선언(Function Declaration)
function add(x, y) {
  return x + y;
}

// 함수 호출
add(3, 5); // 8

// 함수 표현식(function Expression)
let add = function (x, y) {
  return x + y;
};
```

### 🌽 콜백함수

- 함수를 인자 값으로 전달해서 "나중에 호출(call back)"해서 사용하는 것

```javascript
function mul(x, y) {
  return x * y;
}

function cal(a, b) {
  return a(10, 10) + b(10, 10);
}

cal(add, mul); // 120
```

### 🌽 화살표함수

- 함수 표현식보다 단순하고 간결한 문법으로 함수를 만들 수 있는 방법

```javascript
// 화살표 함수
let funcArrow = (arg1, arg2) => expression;

let funcArrow = (arg1, arg2) => {
  return expression;
};

// 함수 표현식
let func = function (arg1, arg2) {
  return expression;
};
```

- 익명함수 : 함수를 변수에 저장하는 함수, 이름이 없다고 생각하기보다는 함수명 대신 변수명을 사용하여 호출

- 기명함수

객체

할당

### 구문(Syntax)

- 어떤 일을 하기 위해 실행

### console.log

### 디버깅

- 버그를 잡는 행위

### 문(Statement)

- 프로그램을 구성하는 기본 단위이자 최소 실행 단위.
- 문을 작성하고 순서에 맞게 나열하는 것이 프로그래밍.
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

### 🌽 리터럴

> 컴퓨터 과학 분야에서 리터럴이란, 소스 코드의 고정된 값을 대표하는 용어
> (위키백과 인용, 검색어 '리터럴')

- 리터럴은 어떠한 값을 명칭하는 것이 아닌 변수 및 상수에 저장되는 값 그 자체를 의미
  => 정수 리터럴, 문자열 리터럴, 배열 리터럴 등 언어의 한 요소로서 리터럴이라고 불린다.

### DOM / BOM

- DOM : 문서를 찍어낼 수 있는 프린트 공장
  ref [얄팍한 코딩사전](https://youtu.be/1ojA5mLWts8)

### 정규표현식

- 특정한 문자열을 찾을 수 있는 표현식

### 🌽 스코프(scope)

- 함수가 실행될 때, 함수 내에서 변수에 대한 접근이 어떻게 되는지를 나타내는 용어
- 변수에 접근할 수 있는 범위, 변수의 유효범위 또는 생존 범위

#### 전역 스코프(Global scope)

- 코드 어디에서든지 참조할 수 있다.
- 전역 변수(Global variable) : 전역에서 선언된 변수미여 어디에든 참조할 수 있다.

#### 지역 스코프(Local scope or Function-level scope)

- 함수 코드 블록이 만든 스코프로 함수 자신과 하위 함수에서만 참조할 수 있다.
- 지역 변수(Local variable) : 지역(함수) 내에서 선언된 변수이며 그 지역과 그 지역의 하부 지역에서만 참조할 수 있다.

```javascript
var x = "global x";
var y = "global y";

function outer() {
  var z = "outer's local z";

  console.log(x); // global x
  console.log(y); // global y
  console.log(z); // outer's local z

  function inner() {
    var x = "inner's local x";

    console.log(x); // inner's local x
    console.log(y); // global y
    console.log(z); // outer's local z
  }

  inner();
}

outer();

console.log(x); // global x
console.log(z); // ReferenceError: z is not defined
```

#### 비 블록 레벨 스코프(Non block-level-scope)

```javascript
if (true) {
  // 코드 블록 내에서 var x 선언
  // 자바스크립트는 블록 레벨 스코프를 사용하지 않으므로
  // 함수 밖에서 선언된 변수는 코드 블록 내에서 선언되었다 할지라도 모두 전역 스코프를 가짐
  var x = "global x";
}

console.log(x); // global x
```

#### 블록 레벨 스코프(Block-level-scope)

- `var` 키워드로 선언한 변수는 오로지 함수의 코드 블록만을 지역 스코프로 인정하는 함수 레벨 스코프를 따름
- `let`의 등장으로 블록 레벨 스코프를 형성하는 것이 가능해짐
- `let`키워드로 선언한 변수는 모든 코드 블록(함수, if문, for문, while문, try/catch문 등)을 지역 스코프로 인정하는 블록 레

```javascript
// 전역 스코프
let i = 10;

// 함수 레벨 스코프
function func() {
  let i = 100;

  // 블록 레벨 스코프
  for (let i = 1; i < 3; i++) {
    console.log(i); // 1 2
  }

  console.log(i); // 100
}

func();

console.log(i); //10
```

### 🌽 전개 문법(spread syntax)

- 함수를 호출할 때 `...arr`를 사용하면, 이터러블 객체 `arr`이 인수 목록으로 '확장'됨

```javascript
let str = "Hello";

console.log([...str]); // H,e,l,l,o

let arr = [3, 5, 1];
let arr2 = [8, 9, 15];

let merged = [0, ...arr, 2, ...arr2];

console.log(merged); // 0,3,5,1,2,8,9,15 (0, arr, 2, arr2 순서로 합쳐집니다.)
```

### 옵셔널 체이닝(Optional chaining) '?.'

- 내용 추가하기
