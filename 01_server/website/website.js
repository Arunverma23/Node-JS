const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{

    
    const collectHeaderData = fs.readFileSync("header.html","utf-8") 

    let file = "home"
    if(req.url != '/'){
        console.log(req.url)
        file = req.url.replace("/","")
        console.log(req.url)
        file = file.replace(".html", "");

    }

    if(req.url != '/style.css'){
        fs.readFile(`${file}.html`,"utf-8",(err, data) => {
        if(err){
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.write(err.message)
            res.end()
        }
        else {
            res.writeHead(200, {"Content-Type":"text/html"})
            // console.log(collectHeaderData)
            res.write(collectHeaderData+data)
            res.end()
        }
    })
    } 
    else if(req.url == '/style.css') {
        fs.readFile("style.css","utf-8",(err, data) => {
        if(err){
            res.writeHead(200,{"Content-Type":"text/plain"})
            res.write("css not found")
            res.end()
        }
        else {
            res.writeHead(200, {"Content-Type":"text/css"})
            res.write(data)
            res.end()
        }
    })
    }

    
}).listen(5600)