// literal style object creation...
let emp = {id:102,name:"Raju",age:26};

let fs = require("fs");
try{
    fs.writeFileSync("emp.json",JSON.stringify(emp));
    console.log("Data stored successfully..");
}catch(Ex){
    console.log(Ex);
}
