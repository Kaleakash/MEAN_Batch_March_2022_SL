let fs = require("fs");
try{
let data = fs.readFileSync("emp.json");
//console.log(data);
let dataStringFormat = data.toString();
//console.log(dataStringFormat)
//console.log(dataStringFormat.id);
//console.log(dataStringFormat.name);
//console.log(dataStringFormat.age);
let dataJson = JSON.parse(dataStringFormat);
console.log("id is "+dataJson.id);
console.log("name is "+dataJson.name);
console.log("age is "+dataJson.age);
}catch(Ex){
    console.log(Ex);
}