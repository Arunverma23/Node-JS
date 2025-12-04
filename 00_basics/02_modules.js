const fs = require('fs'); // -> core module of node js , fs -> file system
const os = require('os');

const { log } = require('console');

// fs.writeFileSync("dummy.txt","trying with module");
// fs.writeFileSync("dummy.js","console.log(2+2)")

console.log(os.platform());
console.log(os.hostname());
console.log(os.cpus());

console.log("console.log is Global Object");
console.log(process.cwd());
console.log(process.pid);

log("custom log");