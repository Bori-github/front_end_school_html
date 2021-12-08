let promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("끝남!"), 3000);
});

console.log("hello world");
promise.then((v) => console.log(v));
console.log("hello world2");

// hello world
// hello world2
// 끝남!

// 아직 배우지 않았지만 이 형태 기억하기
// new Promise((resolve, reject) => {...code...})
//   .then(...code...)
//   .then(...code...)
//   .finally(...code...)
//   .catch(...code...); // <-- .catch에서 에러 객체를 다룰 수 있음
