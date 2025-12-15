// const express = require("express") // Vanila js Syntax
import express from "express";
import home from "./00_pages/home.js"
import {about} from "./00_pages/about.js"

// const homee = home();

const app = express()

// const express = require("express")()
// console.log(app);

app.get("/",(req,res) => {
    res.send(home());
})

app.get("/about",(req,res) => {
    res.send(about())
})

app.listen(3400);


