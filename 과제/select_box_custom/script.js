const btnSelect = document.querySelector(".btn-select");
const listLanguages = document.querySelector(".list-languages");

btnSelect.addEventListener("click", () => {
  btnSelect.classList.toggle("on");
  listLanguages.addEventListener("click", (e) => {
    console.log(e);

    if (e.target.className === "item-language") {
      btnSelect.innerText = e.target.innerText;
      btnSelect.classList.remove("on");
    }
  });
});
