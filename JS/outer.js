// outer라는 식별자가 붙은 레이블 for 문
// 현업에서는 객체와 햇갈려서 잘 안쓰는 편
// 할꺼면 function으로.
outer: for (var i = 2; i < 10; i++) {
  for (var j = 1; j < 10; j++) {
    // i + j === 3이면 outer라는 식별자가 붙은 레이블 for 문을 탈출한다.
    if (i === 5) break outer;
    console.log(`${i} X ${j} = ${i * j}`);
  }
}
