let 전교점수 = [
  // 1반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
  // 2반
  [
    [10, 20, 30, 40, 50],
    [20, 30, 40, 50, 60],
  ],
];

// 각 반의 평균
for (let i = 0; i < 전교점수.length; i++) {
  for (let j = 0; j < 전교점수[i].length; j++) {
    let sum = 0;
    for (let k = 0; k < 전교점수[i][j].length; k++) {
      sum += 전교점수[i][j][k];
    }
    // console.log(sum);
    let avr = sum / 전교점수[i][j].length;
    console.log(avr);
  }
}
