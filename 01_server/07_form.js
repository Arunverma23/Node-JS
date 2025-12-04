const http = require('http')
const fs = require('fs')

http.createServer((req, res)=>{
    
    fs.readFile('./html/form.html','utf-8', (err, data)=>{
        // console.log(req.url)
        if(err){
            res.writeHead(500,{"Content-Type":"text/plain"})
            res.write(err)
            res.end()
            return
        }

        res.writeHead(200,{"Content-Type":"text/html"})

        if(req.url == '/'){
            res.write(data)
            // res.end()
        }
        else if(req.url == '/submit'){
            res.write('ho gya submit')
            // res.end()
        }
        res.end()
        
    })

}).listen(5000)