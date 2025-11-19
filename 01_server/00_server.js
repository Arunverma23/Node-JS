const http = require('http');

http.createServer((req, resp)=>{
    resp.write("<h1>This is Arun Verma</h1>");
    resp.end("hello");
}).listen(4800);

http.createServer((req,resp)=>{
    resp.end("SecondServer");
}).listen(4900);