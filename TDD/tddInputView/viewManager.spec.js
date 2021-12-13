describe("클릭이벤터리 및 뷰를 담당하는 함수입니다.", () => {
  // dependency injection (의존 주입)
  // 혼자 존재할 수 없다.
  // 다른 객체를

  let textManager, viewerEl, btnEl, inpTxt, viewManager;

  beforeEach(() => {
    textManager = new TextManager();
    viewerEl = document.createElement("strong");
    btnEl = document.createElement("button");
    inpTxt = document.createElement("input");

    viewManager = new ViewManager(textManager, { viewerEl, btnEl, inpTxt });
  });

  it("viewManager에 인자가 잘 전달됐는지 확인합니다.", () => {
    // 전부 null로 초기화
    const textManager = null;
    const btnEl = null;
    const viewerEl = null;
    const inpTxt = null;

    // 인자가 전달되는지 확인하는 함수
    // actual 임의의 함수가 들어가길 바라는 것
    const actual = () =>
      new ViewManager(textManager, {
        btnEl,
        viewerEl,
        inpTxt,
      });

    // actual에는 값이 아닌 실행할 수 있는 함수가 전달되어야 합니다.
    expect(actual).toThrowError();
  });

  it("click 이벤트가 발생했을 경우 changeValue 함수를 실행합니다.", () => {
    // 특정한 모듈이 함수를 감시합니다.
    // 1. 먼저 바라보고
    spyOn(viewManager, "changeValue");
    // 2. 실행하고
    btnEl.click();
    // toHaveBeenCalled() : 함수가 호출된 적이 있는지 판별
    // 3. 확인
    expect(viewManager.changeValue).toHaveBeenCalled();
  });

  it("updateView 함수를 실행합니다.", () => {
    spyOn(viewManager, "updateView");
    viewManager.changeValue();
    expect(viewManager.updateView).toHaveBeenCalled();
  });
});
