import mongoose, { mongo } from "mongoose"

const url = "mongodb://localhost:27017/college"

async function dbConnection() {
    await mongoose.connect(url)
    // await mongoose.connect('mongodb://localhost:27017/college')
    const schema = mongoose.Schema({
        name:String,
        email:String,
        age:Number
    })

    const studentsModel = mongoose.model('students',schema)
    const result = await studentsModel.find()
    console.log(result)
}

dbConnection()
