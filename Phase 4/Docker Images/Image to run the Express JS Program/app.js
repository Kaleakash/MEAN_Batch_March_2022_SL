let express = require("express");

let app = express();
let products = [
    {pid:100,pname:"TV",price:550000},
    {pid:101,pname:"Computer",price:45000}
]
app.get("/",(req,res)=> {
    res.send("Welcome to Docker using Express JS")
})

app.get("/user/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user to docker "+name)
})

app.get("/products",(req,res)=> {
    res.json(products);
})

app.listen(9090,()=>console.log("Server running on port number 9090"));