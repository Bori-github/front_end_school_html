// 재귀함수
function factorial(n) {
  if (n <= 1) {
    return n;
  }
  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

function sigma(n) {
  if (n <= 1) {
    return n;
  }
  return n + sigma(n - 1);
}

console.log(sigma(5)); // 15

function reverse(text) {
  // 숫자가 들어 올 것을 대비해서
  text += "";

  if (text.length <= 1) {
    return text;
  }
  return reverse(text.slice(1)) + text[0];
}

console.log(reverse("hello"));
