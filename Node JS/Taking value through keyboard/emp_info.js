let obj = require("readline-sync");
let name  =  obj.question("Enter the name");
let salary = obj.questionFloat("Enter the salary")
let age = obj.questionInt("Enter the age")

console.log("name is "+name);   
console.log("salary is "+salary)
console.log("age is "+age);