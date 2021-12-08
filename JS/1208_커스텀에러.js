// 자바스크립트 자체 내장 에러 클래스 Error의 '슈도 코드'
class Error {
  constructor(message) {
    this.message = message;
    this.name = "Error"; // (name은 내장 에러 클래스마다 다릅니다.)
    this.stack = <call stack>;  // stack은 표준은 아니지만, 대다수 환경이 지원합니다.
  }
}