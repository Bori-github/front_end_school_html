let animal = {
  eats: true,
  walk() {
    alert("동물이 걷습니다.");
  },
};

let rabbit = {
  jumps: true,
  __proto__: animal, // rabbit은 animal을 상속 받음
};

// 메서드 walk는 rabbit의 프로토타입인 animal에서 상속받았습니다.
rabbit.walk(); // 동물이 걷습니다.

// __proto__는 상속받을 대상을 가리킨다고 이해했습니다. 내가 부모를 선택하겠다
