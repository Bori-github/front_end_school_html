// 5. 트리와 그래프
// 5.1 트리
// 트리의 기본 형태
// value
// child - left
// child - right
const tree = {
  root: {
    value: 5,
    left: {
      value: 3,
      left: {
        value: 1,
        left: null,
        right: null,
      },
      right: {
        value: 4,
        left: null,
        right: null,
      },
    },
    right: {
      value: 8,
      left: {
        value: 6,
        left: null,
        right: null,
      },
      right: {
        value: 9,
        left: null,
        right: null,
      },
    },
  },
};

tree.root.value; // 5
tree.root.left.value; // 3

// object로 liked list와 tree 를 만들 수 있는데
// 굳이 class로 만드는 이유는?

// 1. 확장성
// 2. OOP(Object-Oriented Programming, 객체 지향 프로그래밍)
