const http = require("http");

const age = 20;

const server = http.createServer((req, resp)=>{
    resp.setHeader("Content-Type","text/HTML");
    // resp.write("<h2>Hello My 4800 Server</h2>");
    resp.write(`
        <html>
        <headh>
        <title>SERVER 4800 </title>
        </head>
        <body>
        <h1>This is My HTML Code in 4800 Server </h1>
        <h1>`+age+`</h1>
        <h1>`+new Date()+`</h1>
        </body>
        </html>`)
    resp.end("Server End");
    // process.exit();
}).listen(4800);

// server.listen(4800);