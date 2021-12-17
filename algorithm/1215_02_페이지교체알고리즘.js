// 4. 페이지 교체 알고리즘
// 페이징 기법으로 메모리를 관리하는 운영체제에서, 페이지 부재가 발생 하여 새로운 페이지를 할당하기 위해 현재 할당된 페이지 중 어느 것과 교체할지를 결정하는 방법이다. 이 알고리즘이 사용되는 시기는 페이지 부재가 발생해 새로운 페이지를 적재 해야하나 페이지를 적재할 공간이 없어 이미 적재되어 있는 페이지 중 교체할 페이지를 정할 때 사용
// 18년도 코테의 hit 문제 살펴보면서 다시 언급
// LRU 알고리즘
["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA"]["Jeju"][ //1회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo")][ //2회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Jeju", "Pangyo", "Seoul")][ //3회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Pangyo", "Seoul", "NewYork")][ //4회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("Seoul", "NewYork", "LA")][ //5회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "LA", "Seoul")][ //6회차
  ("Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Seoul", "LA")
][("NewYork", "Seoul", "LA")][ //7회차
  // hit - 1
  // miss - 5

  //LRU
  ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
  (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)][ // 5 // 1 - hit // 5
  // FIFO 알고리즘(캐시:3)
  ("바나나", "체리", "한라봉", "자몽", "수박", "수박", "체리")
][바나나][(바나나, 체리)][(바나나, 체리, 한라봉)][(체리, 한라봉, 자몽)][ // 5 // 5 // 5 // 5
  (한라봉, 자몽, 수박)
][(한라봉, 자몽, 수박)][(자몽, 수박, 체리)]; // 5 // 1 - hit // 5

// hit - 1
// miss - 5
