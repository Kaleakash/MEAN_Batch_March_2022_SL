let fs = require("fs");
fs.readFile("demo1.txt",(err,data)=> {
    if(!err){
        //console.log("File present")
        //console.log(data);
        // convert buffer to String 
        let info = data.toString();
        console.log(info);
    }else {
        console.log(err);
    }
})
console.log("Normal Statement1")
console.log("Normal Statement2")
