import express from 'express'
const app = express()


app.use(express.urlencoded({extended: false}))
app.set('view engine', 'ejs')
app.get('/add-user', (req, res) => {
    res.render('addUser')
})

app.post('/submit-user',(req, res) => {
    console.log(req.body)
    res.render("SubmitUser",
         {first: req.body.first ,
             last: req.body.last})
})

app.get('/users', (req, res) => {
    const users = ['Arun','Harsh','Vardhan','Dhriti']
    const isLogin = true;
    res.render('users', {users:users, isLogin: true})
})

app.listen(5100)