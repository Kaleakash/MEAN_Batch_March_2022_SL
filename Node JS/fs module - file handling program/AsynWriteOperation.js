let fs = require("fs");

let msg = "Hello....\n";

// override the data
// fs.writeFile("demo1.txt",msg,(err)=> {
//         if(!err){
//             console.log("data stored in file successfully");
//         }
// })
// append the data
fs.writeFile("demo1.txt",msg,{flag:"a+"},(err)=> {
    if(!err){
        console.log("data stored in file successfully");
    }
})
console.log("Normal Statement1")
console.log("Normal Statement2")

