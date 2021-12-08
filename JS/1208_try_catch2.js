et json = '{ "age": 30 }'; // 불완전한 데이터

try {

  let user = JSON.parse(json); // <-- 에러 없음
  alert( user.name ); // 이름이 없습니다!

} catch (e) {
  alert( "실행되지 않습니다." );
}