describe("텍스트 관리자입니다.", () => {
  let textManager;
  // beforeEach는 it 함수 호출 직전에 실행됩니다.
  beforeEach(() => {
    // 이 안에서 const textManager = new TextManager(); 를 선언한다면
    // 함수 안에 있는 변수이므로 it이 변수에 접근할 수 없다.
    textManager = new TextManager();
  });

  it("텍스트 값을 전달합니다", () => {
    const initValue = textManager.getValue();
    expect(textManager.getValue()).toBe(initValue);
  });

  it("텍스트 값을 수정합니다", () => {
    const newText = { data: "Hello Tiger" };
    textManager.setValue(newText);

    expect(textManager.getValue()).toBe(newText.data);
  });
});
