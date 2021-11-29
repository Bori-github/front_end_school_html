let cars = ["BMW", "Volvo", "Saab", "Ford", "Flat", "Audi"];

console.log(cars[0]);
console.log(cars[-1]); // 음수값을 헝용하지 않는다

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

for (let i = 2; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j}`);
  }
}
