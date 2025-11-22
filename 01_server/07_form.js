const http = require('http');

// 1---> Add file in js

const fs = require('fs');

const querystring = require('querystring');

http.createServer((req,resp)=>{

    if(req.url === '/'){
        fs.readFile('html/form.html','utf-8',(err,data)=>{
        if(err){
            resp.writeHead(500,{"content-type":'text/plain'});
            resp.write("Server Internal Error");
            resp.end();
            // return;
            // resp.end();
        }
        else{
            resp.writeHead(200,{"content-type":"text/html"});
            resp.write(data);
            resp.end();
        }   
        // resp.end();
    })
    }

    // else if(req.url.startsWith('/submit')){
    else if(req.url == "/submit"){

        let dataBody = [];
        req.on('data',(chunks)=>{
            dataBody.push(chunks);
        });

        req.on('end',()=>{
            let rawData = Buffer.concat(dataBody).toString();
            let readableData = querystring.parse(rawData);
            // console.log(readableData);

            let dataString = "My first name is " +readableData.first+ " and my last name is " +readableData.last;
            console.log(dataString);
            fs.writeFileSync("text/" +readableData.first +".txt",dataString);
            console.log("file created");
        });
        resp.write("<h1>Submited Successfully</h1>");
        resp.end();

        // fs.readFile('html/index.html','utf-8',(err,data)=>{
        //     if(err){
        //         resp.writeHead(500,{"content-type":'text/plain'});
        //         resp.write("Server Internal Error");
        //         resp.end();
        //     }
        //     else{
        //         resp.writeHead(200,{"content-type":"text/html"});
        //         resp.write(data);
        //         resp.end();
        //     }
        // })

    }

    else {
        resp.writeHead(404, { "Content-Type": "text/plain" });
        resp.end("404 Page Not Found");
    }

}).listen(3200);

// 2---> Write HTML code in js 

// http.createServer((req,resp)=>{
//     resp.writeHead(200,{"content-type":'text/html'});
//     console.log(req.url);

//     if(req.url == '/'){
//         resp.write(`
//         <form action="/submit" method="post">
//         <input type="text" placeholder="Enter Name" name='name'> </input>
//         <input type="text" placeholder="Enter Name" name='name'> </input>
//         <button>Submit</button>
//         </form>`);
//     }
//     else if(req.url == '/submit'){
//         resp.write('<h1>Submitted Successfully</h1>');
//     }
    
//     resp.end();
// }).listen(3200);