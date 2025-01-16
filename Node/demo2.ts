import * as http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<h1> This Is Landing </h1> ");
    return res.end();
  } else if (req.url === "/add") {
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='/dashboard' method='POST'>");
    res.write("<input type='text' name='Name'>");
    res.write("<button type='submit'>Submit</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (req.url === "/dashboard" && req.method === "POST") {
    const body: Buffer[] = [];

    req.on("data", (chunk: Buffer) => {
      body.push(chunk);
    });

    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      console.log(parsedBody);
      const name = parsedBody.split("=")[1];
      console.log(name);
    });

    res.write("<h1> This Is Dashboard </h1> ");
    return res.end();
  }
});

server.listen(3000);
