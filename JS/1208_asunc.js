// 모던 자바스크립트 예제 (살짝 수정)
async function f() {
  return 100;
}

f()
  .then(function (result) {
    // (**)

    console.log(result); // 100
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log(result); // 200
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 400
    return result * 2;
  });

// await은 (크롬을 제외한 브라우저의 런타임) 일반 함수에서는 사용이 불가합니다.
async function f2() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 1000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  console.log(result); // "완료!"
}

f2();

// 시간을 3초로 하여 어떤 결과가 나오는지 봅시다.
// 모던 자바스크립트 예제 (살짝 수정)
async function f3() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("완료!"), 3000);
  });

  let result = await promise; // 프라미스가 이행될 때까지 기다림 (*)

  console.log(result); // "완료!"
  return 100;
}

f3()
  .then(function (result) {
    // (**)

    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    // (***)

    console.log(result); // 2
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 4
    return result * 2;
  });
