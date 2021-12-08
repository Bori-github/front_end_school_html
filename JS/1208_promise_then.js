// 모던자바스크립트 예제 (살짝 수정)
new Promise(function (resolve, reject) {
  setTimeout(() => reject("error"), 1000); // (*)
})
  .then(function (result) {
    // (**)

    console.log(result + " : 잘 수행!"); // 1
    return result + "one";
  })
  .catch(function (result) {
    // (***)

    console.log(result + " : 애러 발생!");
    return result + "two";
  })
  .then(function (result) {
    console.log(result + " : 잘 수행!"); // 4
    return result + "three";
  });
