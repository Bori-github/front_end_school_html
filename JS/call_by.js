// call by value
let original = 10;
function updateOriginal(originalVal) {
  originalVal += 10;
  console.log("func:" + originalVal);
}

updateOriginal(original);
console.log(original);

// call by reference
let myObj = {
  value: 10,
};
function updateValue(objRef) {
  objRef.value = 20;
  console.log("func:" + myObj.value);
}
updateValue(myObj);
console.log(myObj.value);
