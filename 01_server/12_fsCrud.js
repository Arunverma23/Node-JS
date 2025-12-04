const fs = require('fs')
// const queryString = require('querystring')

// console.log(process.argv[2])
const operation = process.argv[2]
if(operation == 'write'){
    const name = process.argv[3]
    const content = process.argv[4]
    const path = `./Files/${name}.txt`

    console.log(operation, name, content)

    fs.writeFileSync(path, content)
}

else if(operation == 'read'){
    const name = process.argv[3]
    const path = `./Files/${name}.txt`

    console.log(operation, name)

    let data = fs.readFileSync(path,"utf-8")

    console.log(data)
}

else if(operation == 'update'){
    const name = process.argv[3]
    const content = process.argv[4]
    const path = `./Files/${name}.txt`

    console.log(operation, name, content)

    let data = fs.appendFileSync(path," Updated By Terminal")
}

else if(operation == 'delete'){
    const name = process.argv[3]
    const path = `./Files/${name}.txt`

    console.log(operation, name)

    let data = fs.unlinkSync(path)
}


// fs.writeFileSync('./Files/01_file.txt',"This is a File");

// fs.unlinkSync('./Files/01_file.txt')

// const data = fs.readFileSync('./Files/01_file.txt',"utf-8");
// console.log(data)

// fs.appendFileSync("./Files/01_file.txt"," and This is Updated By append")

