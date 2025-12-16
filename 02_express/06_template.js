import express from 'express'

const app = express()

app.set('view engine', 'ejs')

app.get("/", (req, res) => {
    res.render('home', {name:'Arun Verma', email: 'info.arunverma23@gmail.com'})
})

app.listen(5100)