var http   = require("http"),
    ip     = require("ip"),
    chance = require("chance"),
    util   = require("util");

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: util.format("%s suggest to visit %s", ip.address(), chance().city())}));
}).listen(8080);
