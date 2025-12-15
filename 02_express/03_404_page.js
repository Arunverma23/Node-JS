import express from 'express'
import path from 'path'

const app = express()
const absPath = path.resolve("02_view")

app.get("/", (req,res) => {
    // res.sendFile(path.resolve('02_view', 'home.html'))
    // res.sendFile(path.resolve('02_view/home.html'))
    res.sendFile(absPath+"/home.html")
})

app.get("/login", (req,res) => {
    res.sendFile(path.resolve('02_view', 'login.html'))
})

app.get("/about", (req,res) => {
    res.sendFile(path.resolve('02_view', 'about.html'))
})

app.use((req, res)=> {
    res.status(404).sendFile(path.resolve('02_view',"404.html"))
})  

app.listen(5100)