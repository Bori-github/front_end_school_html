const TextManager = (function () {
  // 원시 자료형을 사용하지 않는 이유
  // 사용할 때 값이 복사되어 새로 생성되는데 값을 공유하여 값을 변경하고 싶을 때
  // 복사값이므로 값을 변경할 수 없다
  // 인스턴스 산에 값 공유가 불가능하다
  // let value = "Hello Lions!";

  // 객체 자료형 사용!
  let value = { data: "Hello Lions!" };

  function innerTextManager() {}

  innerTextManager.prototype.getValue = function () {
    return value.data;
  };

  innerTextManager.prototype.setValue = function (newValue) {
    // value.data = newValue.data 로 안받아도 괜찮나요?
    value = newValue;
  };

  return innerTextManager;
})();
