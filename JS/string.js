let s = `abcdefABCDEF`;

console.log(s.length); // 12

console.log(s.indexOf("cde"));
console.log(s.search("ABC"));

// indexOf는 시작값을 설정할 수 있고, search는 정규 표현식을 사용할 수 있다.
console.log(s.indexOf("G"));
console.log(s.search("G"));

console.log(s.slice(6, 9)); // ABC 6번째부터 9-1번째까지 가져오겠다
console.log(s.slice(6)); // ABC 6번째부터 9-1번째까지 가져오겠다
console.log(s.substr(6, 3)); // ABC 6번째부터 3개를 가져오겠다
console.log(s.substring(6, 9));

console.log(s.replace("ABC", "bori")); // abcdefboriDEF

let x = "100,000,000";
console.log(x.replace(",", "")); // 100000,000
console.log(x.replace(/,/g, "")); // 100000000

// console.log(x.replaceAll(",", ""));
