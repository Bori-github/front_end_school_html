function initialize() {
  let view = "산";
  let check = false;

  return function () {
    if (!check) {
      console.log("view has been set!");
      check = true;
      return view;
    } else {
      return;
    }
  };
}

let init = initialize();

initialize();
initialize();
initialize();

init();
init();
init();

// let view;
// function initialize() {
//   let called = 0;
//   return function () {
//     if (called > 0) {
//       return;
//     } else {
//       view = "산";
//       called++;
//       console.log("view has been set!");
//     }
//   };
// }

// const showView = initialize();

// showView();
// showView();
// showView();

// console.log(view);
