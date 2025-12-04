const fs = require('fs')

function userForm(req, res) {
   fs.readFile('./html/form.html','utf-8',(err, data) =>{
    if(err){
        res.writeHead(500,{"Content-Type":"text/plain"})
        res.write(err.message)
        res.end()
        return
    }
    else {
        res.writeHead(200,{"Content-Type":"text/html"})
        res.write(data)
        res.end()
    }
   }) 
}

module.exports = userForm;