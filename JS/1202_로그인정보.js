let 회원정보 = [
  {
    아이디: "jjang",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun1@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang2",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "남",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun2@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang3",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun3@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
  {
    아이디: "jjang4",
    패스워드:
      "5dbfbded05f34de754e8f265448be17934580556b488c0461fd12d211a87aaa5",
    성별: "여",
    휴대폰번호: "010-5004-0000",
    이메일: "hojun4@gmail.com",
    가입연도: "2021-12-02",
    주접속위치: "125.242.161.149",
  },
];

// 1번 남자인 사람
console.log(회원정보.filter((user) => user.성별 === "남"));

// 2번 남자이면서 2021년도에 가입하신 분
console.log(
  회원정보.filter(
    (user) => user.성별 === "남" && user.가입연도.slice(0, 4) === "2021"
  )
);

console.log(
  회원정보.filter(
    (user) => user.성별 === "남" && user.가입연도.split("-")[0] === "2021"
  )
);

// filter는 조건에 맞는 것을 모두 확인한다
// find 는 찾으면 멈춘다 => 고유한 값을 찾을 때 효율을 위해 사용
// 3번 아이디가 jjang인 사람을 찾아주세요.
console.log(회원정보.find((user) => user.아이디 === "jjang"));

// 글이 100개
// 25개는 일상
// 50개는 개발 관련
// 25개는 취미
let blogs = [
  {
    id: 1,
    title: "title1",
    content: "content1",
    section: "section1",
  },
  {
    id: 2,
    title: "title2",
    content: "content2",
    section: "section2",
  },
  {
    id: 3,
    title: "title3",
    content: "content3",
    section: "section3",
  },
];

let sec = "section3";
let data = sec
  ? blogs.filter((blog) => blog.section === sec)
  : "다시 입력해주세요";
