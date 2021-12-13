// 객체지향

//  1. 모듈 패턴
// 모듈 패턴을 이용한 이유? 은닉하기 위해
// 이 함수는 객체를 반환한다.
// 객체를 반환하는 함수는 대문자로 시작한다
function Person() {
  // 이 공간은 클로저
  // 클로저를 이용해서 은닉 변수를 만듬
  // 함수는 함수 컨텍스트를 가진다 => 외부에서 접근이 불가능하다
  let age = 35;

  return {
    // 폐쇄된 공간에 접근할 수 있는 함수
    getAge: function () {
      return age;
    },
    setAge: function (data) {
      age = data;
    },
  };
}

const person = Person();
console.log(person.getAge()); // 35

// 생성자 함수로서 호출하려면 new Person()
// 일반 함수로서 호출하려면 Person()

// 2. 사용자 정의 타입 패턴 : 2015년 이전까지 클래스를 만드는 방법
// 생성자 함수에서 this가 가리키는 것은 인스턴스!
// 메모리 절약 측면에서 사용자 저의 타입 패턴을 사용하는 것이 좋다.
function PersonType() {
  // 이 안에 있는 값은 은닉되지 않는다
  // 값을 숨길 수 없다.
  this.age = 35;
}

// 함수를 등록하는 것
PersonType.prototype.getAge = function () {
  return this.age;
};

// new 키워드 : this가 인스터스를 가리키게 한다.
// 함수 내에서 this는 함수를 호출한 객체 여기서는 window를 가리키게 되는데
// new 키워드로 생성하면 this가 인스턴스를 가리키도록 한다
const instancePerson = new PersonType();
// 이렇게도 접근 가능 굳이 getAge라는 함수를 거치지 않아도된다. 하지만 은닉된 것이 아님
console.log(instancePerson.age);
console.log(instancePerson.getAge());

let person2 = { age: 35 };
let person3 = { age: 45 }; // 더이상 다른 인스턴스를 생성할 수 없다.
person2.age;

// 3. 모듈 + 사용자 정의 타입
// 생성자 함수처럼 재사용을 하면서도 값을 은닉하고 싶을 때 사용
function PersonType2() {
  // 함수 안의 닫힌 공간
  let age = 25;

  function innerPersonType() {}
  innerPersonType.prototype.getAge = function () {
    return age;
  };

  return innerPersonType;
}

const Person3 = PersonType2(); // age라는 값을 리턴
const person3 = new Person3();

console.log(person3.getAge());
