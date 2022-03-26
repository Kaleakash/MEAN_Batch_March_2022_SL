let fs = require("fs");
let emp = {id:102,name:"Ajay",age:24};
try{
let employees = JSON.parse(fs.readFileSync("employee.json"));
console.log("Number of records are "+employees.length);
employees.forEach(emp=>console.log(emp));
employees.push(emp);
fs.writeFileSync("employee.json",JSON.stringify(employees));
console.log("Data stored in file");
}catch(Ex){
    console.log(Ex);
}