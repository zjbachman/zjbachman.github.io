var http = require('http');
var myMod = require('./myownmodule');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.write("Hello World");

    res.end();
}).listen(5000);