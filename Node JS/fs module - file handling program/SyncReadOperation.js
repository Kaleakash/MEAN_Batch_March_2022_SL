let fs = require("fs");
try{

    let data = fs.readFileSync("demo2.txt");
    console.log(data.toString());
    console.log("Normal Statement1");
    console.log("Normal Statement2");

}catch(Ex){
    console.log(Ex);
}