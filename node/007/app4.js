const http = require("http");
const fs = require("fs");
const querystring = require("querystring");

// 여기에 있는 값들이 어떤 값들인지에 대해 알기 위한 예제입니다.
const server = http.createServer(function (req, res) {
  // get 방식으로 전달되어 아래의 문장이 출력된다.
  console.log("server가 구동중입니다.");
  // get과 post 둘 다 테스트
  if (req.method == "GET") {
    fs.readFile("./test.html", "utf8", (err, data) => {
      console.log(err);
      //writeHead대신 setHeader를 사용하여 type을 보낼 수 있음
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (req.method == "POST") {
    req.on("data", function (chunk) {
      console.log(chunk.toString());
      let data = querystring.parse(chunk.toString());
      console.log(data);
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(`id : ${data.id_value}, pw : ${data.pw_value}`);
      res.end();
    });
  }
});

server.listen(8080);
