import express from 'express'
import home from './00_pages/home.js'
import path from 'path'
import { about } from './00_pages/about.js';


const app = express();

app.get("/",(req,res)=>{
    res.send(home())
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve('01_form', 'form.html'))
})

app.post ("/submit",(req,res)=>{
    res.sendFile(path.resolve('01_form','submit.html'))
})

app.get ("/about",(req,res)=>{
    res.send(about())
})


app.listen(5000);