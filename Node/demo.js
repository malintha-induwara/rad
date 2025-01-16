"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var routes_1 = require("./routes");
var server = http.createServer(routes_1.Routes);
server.listen(3000);
