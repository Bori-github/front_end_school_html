// try {
//   ... 코드를 실행 ...
// } catch(e) {
//   ... 에러 핸들링 ...
// } finally {
//   ... 항상 실행 ...
// }

try {
  alert("try 블록 시작");
  if (confirm("에러를 만드시겠습니까?")) 이상한_코드();
} catch (e) {
  alert("catch");
} finally {
  alert("finally");
}
