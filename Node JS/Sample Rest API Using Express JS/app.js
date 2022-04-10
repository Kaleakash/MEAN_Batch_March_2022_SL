let express = require("express");
let cors = require("cors");

let app = express();
// adding middleware to enable json data from request body part 
app.use(express.json());    
app.use(cors());      // adding middleware to enable cors features to access resource by front end technologies.       

let product ={pid:100,pname:"Tv",price:120000};     // object creation in js literal style.
let products =[
    {pid:100,pname:"Tv",price:120000,url:"https://media.gettyimages.com/photos/television-set-against-white-background-picture-id1191058022?k=20&m=1191058022&s=612x612&w=0&h=6TFFAetYY4JQltVtiArOfRVFRSbxRK7RWfH-u5g_3Hw="},
    {pid:101,pname:"Computer",price:54000,url:"data:image/jpeg;base64,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"},
    {pid:102,pnane:"Laptop",price:85000,url:"https://i.dell.com/is/image/DellContent//content/dam/global-asset-library/Products/Notebooks/Inspiron/14_5410_non-touch/in5410nt_cnb_05000ff090_gy_backlit.psd?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=582&qlt=100,0&resMode=sharp2&size=582,402"}
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
            res.json(product);                // display product details  
            //res.json({"pname":product.pname});  // display display only product name
    }
})
// http://localhost:3000/storeProduct
app.post("/storeProduct",(req,res)=> {
    let product = req.body;
    //console.log(product);
    let result = products.find(p=>p.pid==product.pid);
    if(result==undefined){
        products.push(product);
        res.json({"msg":"Produt Details stored successfully"})
    }else {
        res.json({"msg":"Product id must be unique"})
    }
    
})
// http://localhost:3000/deleteProductById/1
// http://localhost:3000/deleteProductById/100
app.delete("/deleteProductById/:pid",(req,res)=> {
    let pid = req.params.pid;
    let index = products.findIndex(p=>p.pid == pid);
    if(index<0){
        res.json({"msg":"Product not present"})
    }else {
        products.splice(index,1);       //1st parameter index position and 2 parameter number of elements to delete
        res.json({"msg":"Record deleted successfully"}) 
    }
});
// http://localhost:3000/updateProductPrice
app.put("/updateProductPrice",(req,res)=> {
    console.log("update method ")
    let product = req.body;
    console.log(product);
    let index = products.findIndex(p=>p.pid == product.pid);
    if(index<0){
        res.json({"msg":"Product not present"})
    }else {
        products[index].price = product.price;
        res.json({"msg":"Product details updated successfully..."})

    }
})
// http://localhost:3000/updateProduct
app.put("/updateProduct",(req,res)=> {
    let product = req.body;
    let index = products.findIndex(p=>p.pid == product.pid);
    if(index<0){
        res.json({"msg":"Product not present"})
    }else {
        products[index].price = product.price;
        products[index].pname = product.pname;
        res.json({"msg":"Product details updated successfully..."})

    }
})



app.listen(3000,()=>console.log("Running the application on port number 3000"))