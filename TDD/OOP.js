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

// 2. 사용자 정의 타입 패턴
function PersonType() {
  // 이 안에 있는 값은 은닉되지 않는다
  // 값을 숨길 수 없다.
  this.age = 35;
}

PersonType.prototype.getAge = function () {
  return this.age;
};

const instancePerson = new PersonType();
console.log(instancePerson.getAge());
console.log(instancePerson.age); // 이렇게도 접근 가능 굳이 getAge라는 함수를 거치지 않았도
