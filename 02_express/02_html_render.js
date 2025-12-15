import express from 'express'
import path from 'path'

const app = express()

const publicPath = path.resolve('public')

app.use(express.static(publicPath));


app.get("/", (req,res) => {
    res.sendFile(path.resolve('02_view', 'home.html'))
    // res.sendFile(path.resolve('02_view/home.html'))
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve('02_view', 'login.html'))
})

app.get("/about", (req,res) => {
    res.sendFile(path.resolve('02_view', 'about.html'))
})

// console.log(publicPath)

app.listen(5100)