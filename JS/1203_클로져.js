// 클로져, closure : 폐쇄
// 클로져는 테크닉이다 => 폐쇄된 공간의 데이터에 접근하기 위한 테크닉
// 폐쇄된 공간에 접근할 수 있는 함수
function myFunction() {
  var val1 = "hello";
}

// myFunction안에 있는 val1을 함수 밖에서 쓸 수 없습니다.
// val1은 myFunction 함수 안에 폐쇄되어 있다.
//

function myFunction2() {
  var val2 = "hello";

  return {
    //리턴을 이용해서 함수 안의 값을 밖으로 뺄 수 있다.
    // 함수는 객체도 리턴할 수 있다
    // 왜 굳이 객체로 다시 리턴
    getVal2: function () {
      // getVal1이라는 키에 연결된 함수가 있다.
      return val2; // 함수니까 리턴을 할 수 있잖아요 이때 val2을 리턴해줘요
    },
  };
}

let result = myFunction2();

console.log(result.getVal2()); // hello
// 원래대로라면 저 val2은 외부에서 접근하지 못하는건데, 클로저를 통해서  getVal2을 통해서만 val2에 접근할 수 있게 할 수 있습니다
