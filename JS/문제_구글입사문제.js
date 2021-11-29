// https://codingdojang.com/scode/393?answer_mode=hide

let text = "";
let count = 0;

for (let i = 0; i < 10001; i++) {
  text += i;
}

for (let i = 0; i < text.length; i++) {
  if (text[i] == "8") {
    count += 1;
  }
}

console.log(count);
