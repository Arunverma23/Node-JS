const http = require('http');

http.createServer((req, resp)=>{
    resp.write("<h1>This is My First Server</h1>");
    resp.write("<h2>This is Arun Verma</h2>");
    resp.end("Server End");
}).listen(4800);

http.createServer((req,resp)=>{
    resp.write("<h1>This is My Second Server</h1>")
    resp.write("<h2>This is Arun Verma</h2>");
    resp.end("Server End");
}).listen(4900);