let today = new Date(`2021/12/5/12:00`);

console.log(today); // 2021-12-05T03:00:00.000Z
console.log(today.toString()); // Sun Dec 05 2021 12:00:00 GMT+0900 (대한민국 표준시)
console.log(today.toLocaleString("kr-KR")); // 2021. 12. 5. 오후 12:00:00
console.log(today.toLocaleString("en-US")); // 12/5/2021, 12:00:00 PM
console.log(today.toTimeString()); // 12:00:00 GMT+0900 (대한민국 표준시)
console.log(today.toISOString()); // 2021-12-05T03:00:00.000Z

console.log(today.toISOString().slice(0, 10)); // 2021-12-05
console.log(today.toISOString().slice(0, 10).split("-")); // [ '2021', '12', '05' ]
