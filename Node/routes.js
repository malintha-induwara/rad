"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Routes = Routes;
function Routes(req, res) {
    if (req.url === "/") {
        res.write("<h1> This Is Landing </h1> ");
        return res.end();
    }
    else if (req.url === "/add") {
        res.write("<html>");
        res.write("<body>");
        res.write("<form action='/dashboard' method='POST'>");
        res.write("<input type='text' name='Name'>");
        res.write("<button type='submit'>Submit</button>");
        res.write("</form>");
        res.write("</body>");
        res.write("</html>");
        return res.end();
    }
    else if (req.url === "/dashboard" && req.method === "POST") {
        var body_1 = [];
        req.on("data", function (chunk) {
            body_1.push(chunk);
        });
        req.on("end", function () {
            var parsedBody = Buffer.concat(body_1).toString();
            console.log(parsedBody);
            var name = parsedBody.split("=")[1];
            console.log(name);
            res.write("<h1> Hello ".concat(name, " </h1> "));
            res.end();
        });
    }
}
