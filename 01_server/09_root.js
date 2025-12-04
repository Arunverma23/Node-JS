const http = require('http')
const userForm = require('./10_userForm')
const userDataSubmit = require('./11_userDataSubmit')

http.createServer((req, res)=>{

    if(req.url == "/"){
        userForm(req, res)
    }
    else if(req.url == "/submit"){
        userDataSubmit(req, res)
    }
    
}).listen(3200)