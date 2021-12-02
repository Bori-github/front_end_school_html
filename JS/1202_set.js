let s = new Set("abcdeeeeeeeee");
let b = new Set("ab");
// Set은 중복을 허용하지 않는다!!
console.log(s); // Set(5) { 'a', 'b', 'c', 'd', 'e' }
console.log(s.size);

// Set에 값을 추가하기
s.add("f");
console.log(s);

let newS = [...s].filter((value) => b.has(value));

console.log(newS);

console.log(new Set([...s, ...b]));
