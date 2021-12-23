let 이름 = "보리";
let 나이 = 30;
function 한살더먹음() {
  나이 += 1;
}
function 값가져오기() {
  return 나이;
}

module.exports.이름 = 이름;
module.exports.나이 = 나이;
module.exports.한살더먹음 = 한살더먹음;
module.exports.값가져오기 = 값가져오기;
