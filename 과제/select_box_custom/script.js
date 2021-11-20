const btnSelect = document.querySelector(".btn-select");
const listLanguages = document.querySelector(".list-languages");
// const itemLanguage = document.querySelector(".item-language");

btnSelect.addEventListener("click", () => {
  btnSelect.classList.toggle("on");
  listLanguages.addEventListener("click", (e) => {
    console.log(e);
    // if (e.target.nodeName === "LI") {
    //   btnSelect.innerText = e.target.innerText;
    //   btnSelect.classList.remove("on");
    // }
    if (e.target.className === "item-language") {
      btnSelect.innerText = e.target.innerText;
      btnSelect.classList.remove("on");
    }
  });
});
