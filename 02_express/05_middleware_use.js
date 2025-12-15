import express from 'express'
import path from 'path'
import morgan from 'morgan'


const app = express()

app.use(morgan('dev'))

// how to add middleware

// function ageCheck(req, res, next) {
//     if(!req.query.age || req.query.age < 18) {
//         res.send("Alert ! You cann't Acess These Page")
//     }

//     next()
// }

// app.use(ageCheck)
    
// function IPCheck(req, res, next) {
//    const ip = req.socket.remoteAddress
//    console.log(ip)
//    if(ip.includes('192.168.16.246')){
//         res.send("Alert ! You cann't Acess These Page")
//    }
//    else {
//          next()
//    }
  
// }

// app.use(IPCheck)

// how to add middleware in specific route

function checkAgeRouteMiddleware(req, res, next) {

    if(!req.query.age || req.query.age < 18){
        res.send("Your are not allowed to acess this page")
    }

    next()
    
}

// built in middleware

app.use(express.urlencoded({extended: false}))

// external middleware

// morgon



app.get("/", (req, res) => {
    res.send("Home Page")
})

app.get("/login", (req, res) => {
    res.sendFile(path.resolve('02_view','login.html'))
})

app.get("/users",checkAgeRouteMiddleware, (req, res) => {
    res.send("users Page")
})

app.get("/admin", (req, res) => {
    res.send1("Admin Page")
})

app.post("/submit", (req, res) => {
    console.log("details: " ,req.body)
    res.send("submitted successfully")
})

// app.get("/error", (req, res) => {
//     // res.send1(error())
//     const err = new Error('')
//     err.status = 404
//     next(err)
// })

// error handeling middlewares

// function errorHandling(error, req, res, next){
//     res.status(error.status || 500).send("Try after some time")
// }

// app.use(errorHandling)

app.use((error, req, res, next) => {
    res.status(error.status || 500).send("Try after some time")
})

app.listen(5100)