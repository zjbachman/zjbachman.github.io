/*

var http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});

    res.write("Hello World");
    res.end();
}).listen(8080);

*/

//const process = require('process');
console.log(process.env);
const words = JSON.stringify(process.env, "\n", "\n");

const http = require('http');
const hostname = "localhost";
const port = 8080;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(`${words}`);
});

server.listen(8080, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`);
});

