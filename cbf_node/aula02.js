// Criando um servidor simples em node.js
const port = 1337;
const host = '127.0.0.1:' + port
const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type':'text/plain'});
    res.write('CFB Cursos\nCurso de Node.js');
    res.end();
}).listen(port);

console.log(host);