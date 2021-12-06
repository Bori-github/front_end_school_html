function User(name) {
  this.name = name;
  console.log(this.name);
}

let user = User("호준"); // 호준
// console.log(user.name); Cannot read property 'name' of undefined

let user2 = new User("호준"); // 호준
console.log(user2.name); // 호준
