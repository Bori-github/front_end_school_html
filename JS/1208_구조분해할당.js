// 이름과 성을 요소로 가진 배열
let arr = [1000, ["Hojun", "Lee"]];

// 구조 분해 할당을 이용해
// firstName엔 arr[0]을
// surname엔 arr[1]을 할당하였습니다.
let [계좌잔고, [firstName, surname]] = arr;

console.log(계좌잔고);
console.log(firstName);
console.log(surname);
