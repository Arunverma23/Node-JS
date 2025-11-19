// import { userName } from "./01_data"; valid for Js but not directly supported in node js

// -> 1) 
// const data  = require('./01_data'); 
const {userName} = require('./01_data');

console.log(userName);




// // Keywords used to decalre variables

// let a = 13;
// var b = 87;
// const c = a+b;

// console.log(a+b,c);

// // if statement

// if(a == 200){
//     console.log("This is if condition");
// }

// // Function

// function developer(category){
//     console.log(`I am ${category} Developer`);
// }

// developer('Backend');
// developer('Frontend');

// // For Loop 

// for(var i=0;i<=10;i++){
//     console.log(i);
// }

// // While Loop

// while(i<=20){
//     console.log(i);
//     i++;
// }

// // Do While Loop

// do {
//     console.log("I am Do While Loop");
// } while (false);

// // Array

// var users = ["Arun","Alex","Elon","Bruce"];
// console.log(users[0]);

// for(var user=0;user<users.length;user++){
//     console.log(`I am the ${user}th ${users[user]}`);
// }

// // Object

// var user_details = {
//     name : {
//         full_name : 'Arun',
//         last_name : 'Verma'
//     },
//     Age : '21'
// }

// console.log(`My Full Name is ${user_details.name.full_name + ` ${user_details.name.last_name}`}
// I am ${user_details.Age}`);


