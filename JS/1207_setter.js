let user = {
  name: "John",
  surname: "Smith",

  get fullName() {
    return `${this.name} ${this.surname}`;
  },

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },
};

// 주어진 값을 사용해 set fullName이 실행됩니다.
user.fullName = "Alice Cooper";

console.log(user.name); // Alice
console.log(user.surname); // Cooper
