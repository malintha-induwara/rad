import * as http from "http";
import * as fs from "fs";

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   fs.writeFileSync("test.txt", "Hello, World!");

  if (req.url === "/") {
    res.write(" <h1> Hello, World! </h1>");
    res.end();
  } else if (req.url === "/add") {
    fs.writeFile("demo.txt", req.url, (err) => {
      res.write(" <h1> File Created! </h1>");
      return res.end();
    });
  } 
});

server.listen(3000);
