import mongoose, { mongo } from "mongoose"
import express from 'express'
import studentModel from "./model/studentModel.js"

const app = express()
app.use(express.json())

await mongoose.connect("mongodb://localhost:27017/college").then(() => {
    console.log("_________connected________")
})

app.get("/", async (req, res) => {

    const studentData = await studentModel.find()

    res.send({
        studentData
    })
})


app.post('/save', async (req, res) => {

    console.log(req.body)
    const {name,age,email} = req.body
    if(!req.body || !name || !age || !email) {
        res.send({
        message: "data Not stored",
        sucess: false,
        storedInfo: null
    })
        return false
    }
    const studentData = await studentModel.create(req.body)
    res.send({
        message: "data stored",
        sucess: true,
        storedInfo: studentData
    })

})

app.listen(5100)

// const url = "mongodb://localhost:27017/college"

// async function dbConnection() {
//     await mongoose.connect(url)
//     // await mongoose.connect('mongodb://localhost:27017/college')
//     const schema = mongoose.Schema({
//         name:String,
//         email:String,
//         age:Number
//     })

//     const studentsModel = mongoose.model('students',schema)
//     const result = await studentsModel.find()
//     console.log(result)
// }

// dbConnection()
