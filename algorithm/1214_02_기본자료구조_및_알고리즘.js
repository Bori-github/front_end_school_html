// 목차(기본 자료구조 및 알고리즘)
// 1. 스택과 큐
// 2. 연결리스트(linked list)
// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 1. 스택과 큐
class Stack {
  constructor() {
    this.arr = [];
  }

  push(data) {
    this.arr.push(data);
  }

  pop(index = this.arr.length - 1) {
    // index가 없을 경우
    if (index === this.arr.length - 1) {
      return this.arr.pop();
    }
    // index가 있을경우
    // let result = this.arr[index];
    // this.arr = [...this.arr.slice(0, index), ...this.arr.slice(index + 1)];
    let result = this.arr.splice(index, 1);
    return result;
  }

  empty() {
    if (arr.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  top() {
    return this.arr[this.arr.length - 1];
  }

  bottom() {
    return this.arr[0];
  }
}

let s = new Stack();
s.push(10);
s.push(20);
s.push(30);
s.push(100);
s.push(200);
s.push(300);

s.pop();
console.log(s);

s.pop(2);
console.log(s);

// 2. 연결리스트(linked list)
// 2.1 첫 번째 시간
// 연결리스트, 메모리 효율을 위해 사용되는 경우가 많음
// js에서는 메모리 효율이 그다지 좋지 못함
// 개념 : https://en.wikipedia.org/wiki/Linked_list
// 알고리즘 시각화 : https://visualgo.net/ko

const list = {
  head: {
    value: 90,
    next: {
      value: 2,
      next: {
        value: 77,
        next: {
          value: 35,
          next: null, // 마지막 값은 null을 가리킨다
        },
      },
    },
  },
};

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    let init = new Node("init");
    this.head = init;
    this.tail = init;

    this.현재노드 = undefined;
    this.데이터수 = 0;
  }

  get fullData() {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`;
      순회용현재노드 = 순회용현재노드.next;
    }
    // JSON.parse : 문자열을 배열로 바꿔준다
    return JSON.parse(`[${s.slice(0, -1)}]`);
  }

  length() {
    return this.데이터수;
  }

  append(data) {
    let 새로운노드 = new Node(data);
    // 마지막 값이 null에서 새로운 노드가 됨
    this.tail.next = 새로운노드;
    // 마지막 노드는 새로운 노드가 됨
    this.tail = 새로운노드;
    this.데이터수 += 1;
  }

  toString() {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    let s = "";
    for (let i = 0; i < this.데이터수; i++) {
      s += `${순회용현재노드.data},`;
      순회용현재노드 = 순회용현재노드.next;
    }
    // 맨 마지막에 콤마와 띄어쓰기가 있으므로 -1 작성
    return s.slice(0, -1);
  }

  insert(index, data) {
    let 순회용현재노드 = this.head;
    순회용현재노드 = 순회용현재노드.next;

    for (let i = 0; i < index - 1; i++) {
      순회용현재노드 = 순회용현재노드.next;
    }
    let 새로운노드 = new Node(data);
    // 마지막 데이터 지워짐
    새로운노드.next = 순회용현재노드.next;
    순회용현재노드.next = 새로운노드;
    // 데이터수 추가하면 마지막 데이터가 지워지지 않고 데이터 추가
    this.데이터수 += 1;
  }
}

// console
l = new LinkedList();
l.append(1);
l.append(2);
l.append(3);
l.append(10);
l.append(20);
l.append(30);
l.length();
l.insert(3, 100);
l.length();
// fullData 뒤에 괄호 없이 실행
l.fullData;

// 3. 정렬
// 4. 페이지 교체 알고리즘
// 5. 트리와 그래프
// 6. 트리의 순회

// 목차(실전 코딩테스트 풀이)
// 1. 18년도
// 2. 19년도
// 3. 20년도
// 4. 21년도
