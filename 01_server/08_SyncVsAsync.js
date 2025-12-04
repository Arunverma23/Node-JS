
// // Synchronously Running

// console.log("1");
// console.log("2");
// console.log("3");

// // Asynchronously Running

// console.log("1");

// setTimeout(() => {
//     console.log("2");
// }, 0)

// console.log("3");

const fs = require('fs');

// fs.readFile("./text/Arun.txt","utf-8",(err, data) => {
//     if(err){
//         return false
//     }
//     console.log(data) 
// }) // Async

const data = fs.readFileSync("./text/Arun.txt","utf-8");
console.log(data) // Sync

console.log("End Script")
