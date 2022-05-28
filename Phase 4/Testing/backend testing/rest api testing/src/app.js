let express = require("express");
let app = express();
app.get("/msg",(req,res)=> {
    res.send("Welcome to Simple Rest API")
})
let emp = {id:100,name:"Ravi",age:21}

app.get("/emp",(req,res)=> {
    res.json(emp)
})


app.listen(9090,()=>console.log("server running on port number 9090"));


module.exports=app