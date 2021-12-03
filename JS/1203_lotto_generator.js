function randomFunc(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

let lottoArr = [];
function lottoGenerator() {
  while (lottoArr.length < 6) {
    let result = randomFunc(1, 46);
    let isGot = false;

    // 중복 판단
    // lottoArr.forEach((el) => {
    //   if (el === result) {
    //     isGot = true;
    //   }
    // });

    // 중복이 없다면 배열에 추가
    // if (!isGot) {
    //   lottoArr.push(result);
    // }

    if (!lottoArr.includes(result)) {
      lottoArr.push(result);
    }
  }
  return lottoArr;
}

console.log(lottoGenerator());
