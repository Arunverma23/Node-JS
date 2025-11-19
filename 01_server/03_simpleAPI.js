const http = require('http');

const userData = [
    {
        name:'Arun',
        age:20,
        email:'info.arun@gmail.com'
    },

    {
        name:'Alex',
        age:21,
        email:'info.alex@gmail.com'
    },

    {
        name:'Aran',
        age:22,
        email:'info.aran@gmail.com'
    }
]

http.createServer((req, resp)=>{
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(5000);