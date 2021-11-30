let i = 2;
let j = 1;
while (i < 10) {
  while (j < 10) {
    if (j == 5) {
      break;
    }
    console.log(`${i} X ${j} = ${i * j}`);
    j++;
  }
  i++;
  j = 1;
}
