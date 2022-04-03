let express = require("express");
const res = require("express/lib/response");

let app = express();
// adding middleware to enable json data from request body part 
app.use(express.json());

let product ={pid:100,pname:"Tv",price:120000};     // object creation in js literal style.
let products =[
    {pid:100,pname:"Tv",prce:120000},
    {pid:101,pname:"Computer",price:54000},
    {pid:102,pnane:"Laptop",price:85000}
]
// http://localhost:3000/sayHello
app.get("/sayHello",(req,res)=> {
    res.send("Welcome to Simple Rest API in Text Format");
})
// http://localhost:3000/sayJson
app.get("/sayJson",(req,res)=> {
    res.json({"msg":"Welcome to Simple RESt API in json format"});
})
// http://localhost:3000/getProductInfo
app.get("/getProductInfo",(req,res)=> {
    res.json(product);          // automatically convert js object into json format. 
})
// http://localhost:3000/allProducts 
app.get("/allProducts",(req,res)=> {
    res.json(products);
})
// http://localhost:3000/singleQueryParam?name=Ravi
app.get("/singleQueryParam",(req,res)=> {
    let name  = req.query.name;
    res.send("Welcome user to REst API "+name);
})
// http://localhost:3000/multipleQueryParam?name=Ravi&pass=123
app.get("/multipleQueryParam",(req,res)=> {
    let name = req.query.name;
    let pass = req.query.pass;
    if(name=="Ravi" && pass=="123"){
        res.send("Successfully login")
    }else {
        res.send("Failure try once again")
    }
})
// http://localhost:3000/singlePathParam/Ajay
app.get("/singlePathParam/:name",(req,res)=> {
    let name = req.params.name;
    res.send("Welcome user to Rest API using path param "+name);
})
// http://localhost:3000/multiPathParam/Ravi/123
app.get("/multiPathParam/:name/:pass",(req,res)=> {
   let name = req.params.name;
   let pass = req.params.pass;
   if(name=="Ravi" && pass=="123"){
    res.send("Successfully login")
    }else {
    res.send("Failure try once again")
    }
})
// http://localhost:3000/findProductById/100
// http://localhost:3000/findProductById/1000
app.get("/findProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    let product = products.find(p=>p.pid==pid);
    if(product==undefined){
            res.json({"msg":"product details not present with pid as "+pid})
    }else {
            //res.json(product);                // display product details  
            res.json({"pname":product.pname});  // display display only product name
    }
})
// http://localhost:3000/storeProduct
app.post("/storeProduct",(req,res)=> {
    let product = req.body;
    //console.log(product);
    let result = products.find(p=>p.pid==product.pid);
    if(result==undefined){
        products.push(product);
        res.send({"msg":"Produt Details stored successfully"})
    }else {
        res.send({"msg":"Product id must be unique"})
    }
    
})

app.listen(3000,()=>console.log("Running the application on port number 3000"))