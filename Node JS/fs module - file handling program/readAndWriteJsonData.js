let fs = require("fs");
let obj = require("readline-sync");
idValue = obj.questionInt("Enter the id")
nameValue = obj.question("Enter the name")
ageValue = obj.questionFloat("Enter the age")
let emp = {id:idValue,name:nameValue,age:ageValue};
try{
let employees = JSON.parse(fs.readFileSync("employee.json"));
console.log("Number of records are "+employees.length);
employees.forEach(emp=>console.log(emp));
let result = employees.find(e=>e.id==emp.id);
if(result==undefined){
    employees.push(emp);
    fs.writeFileSync("employee.json",JSON.stringify(employees));
    console.log("Data stored in file");
}else {
    console.log("Record didn't store because id must be unqiue")
}

}catch(Ex){
    console.log(Ex);
}