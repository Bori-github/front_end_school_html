switch (1) {
  case 0:
    console.log("일요일, no break");
  case 1:
    console.log("월요일, no break");
  case 2:
    console.log("화요일, no break");
  case 3:
    console.log("수요일, no break");
}

switch (new Date().getDay()) {
  case 0:
    console.log("일요일");
    break;
  case 1:
    console.log("월요일");
    break;
  case 2:
    console.log("화요일");
    break;
  case 3:
    console.log("수요일");
    break;
  default:
    break;
}
