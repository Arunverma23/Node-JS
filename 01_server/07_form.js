const http = require('http')
const fs = require('fs')
const queryString = require('querystring')

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
            let dataBody = []
            req.on('data',(chunk)=>{
                dataBody.push((chunk))
            })

            req.on('end',()=>{
                let rawData = Buffer.concat(dataBody).toString();
                let readableData = queryString.parse(rawData);
                console.log(readableData);

                // let dataString = "My Name is "+readableData.first+
                // " /n My Last Name is "+readableData.last

                 let dataString = `My name is ${readableData.first} my last name is ${readableData.last}`

                console.log(dataString)

                // fs.writeFileSync(`./text/${readableData.first}.txt `, dataString) // sync

                // console.log("File Created Synchronously")

                fs.writeFile(`./text/${readableData.first}.txt `, dataString, 'utf-8', (err) => {
                    if(err){
                        res.end("Internal Server Error")
                        return 
                    }
                    else{
                        console.log("file Created Asynchronously")
                    }
                }) // async
            })

            res.write('ho gya submit')
            // res.end()
        }
        res.end()
        
    })

}).listen(5000)