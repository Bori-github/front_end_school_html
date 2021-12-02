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

// 피보나치
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(0));
console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));

// 호출되는 것이 메모리를 차지하고 있으므로 아래 기법을 적절히 믹싱해서 사용할 필요가 있음
// 반복문, 다이나믹 프로그래밍(메모이제이션(하향식), 타뷸레이션(상향식))
let fibo_cache = [];
function fibo(n) {
  if (n in fibo_cache) {
    return fibo_cache[n];
  }
  fibo_cache[n] = n < 2 ? n : fibo(n - 2) + fibo(n - 1);
  return fibo_cache[n];
}

console.log(fibo(0));
console.log(fibo(1));
console.log(fibo(2));
console.log(fibo(3));
