let fs = require("fs");
let msg = "Welcome to FS Synchronous operation";
try{

    fs.writeFileSync("demo2.txt",msg,{flag:"a+"});
    console.log("Data stored in file successfully..");
    console.log("Normal statement1")
    console.log("Normal statement2")
    
}catch(Ex){
    console.log(Ex);
}
