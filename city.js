var http   = require("http"),
    ip     = require("ip"),
    chance = require("chance"),
    util   = require("util");

// Default port is 8080, overridden by PORT env variable if provided
var port = process.env.PORT || 8080;

http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'application/json' });
    response.end(JSON.stringify({ message: util.format("%s suggests to visit %s", ip.address(), chance().city())}));
}).listen(port);

console.log(util.format("waiting for request on port %s", port));
