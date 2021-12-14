// 원본 js를 테스트할 테스트 파일

// describe : 테스트 유닛들의 모음(자스민에서 지원하는 함수)
// 모음에 대한 이름을 정할 수 있다.
// html에 비유하면 section과 비슷
// 각각에 대한 설명을 앞에 작성한다 => "자스민 테스트 입니다."
describe("텍스트 관리자입니다.", () => {
  // it = 테스트 유닛
  let textManager;
  // beforeEach는 it 함수 호출 직전에 실행됩니다.
  beforeEach(() => {
    // 이 안에서 const textManager = new TextManager(); 를 선언한다면
    // 함수 안에 있는 변수이므로 it이 변수에 접근할 수 없다.
    textManager = new TextManager();
  });

  it("텍스트 값을 전달합니다", () => {
    const initValue = textManager.getValue();
    // expect : 실행할 함수의 결과값을 인수로 전달 한다. = 기대식
    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다", () => {
    const newText = { data: "Hello Tiger" };
    textManager.setValue(newText);

    expect(textManager.getValue()).toBe(newText.data);
  });
});
