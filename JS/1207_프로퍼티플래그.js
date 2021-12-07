let user = {
  name: "John",
};

let descriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(descriptor); // { value: 'John', writable: true, enumerable: true, configurable: true }

// let user = {
//   name: "John"
// };

Object.defineProperty(user, "name", {
  writable: false,
});

user.name = "Pete";
console.log(user);
