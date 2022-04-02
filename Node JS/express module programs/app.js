// load the express module 
let express = require("express");
let bodyParser = require("body-parser");
let fs = require("fs");
let alert= require("alert");

//we have to create the reference of express module 
let app = express();

// add middleware 
app.use(bodyParser.urlencoded({extended:true}));     // to enable post data from body part. 

// http://localhost:3000
app.get("/",(req,res)=> {
        //res.send("Welcome to simple express js application")
        //res.sendFile("index.html"); Error 
        //res.sendFile("D:\\Desktop\\Mar 2022 Phase 3 and 4 batch\\Node JS\\express module programs\\index.html");
        //res.send(__dirname);
        res.sendFile(__dirname+"\\index.html");
    })
// http://localhost:3000/aboutus
app.get("/aboutus",(req,res)=> {
   // res.send("<h2>About Us Page</h2>");
   res.sendFile(__dirname+"\\aboutus.html");
})
// http://localhost:3000/contactus
app.get("/contactus",(req,res)=> {
    //res.send("<h2>Contact Us Page</h2>");
    res.sendFile(__dirname+"\\contactus.html");
})
// http://localhost:3000/login
app.get("/login",(req,res)=> {
    //res.send("<h2>login page</h2>");
    res.sendFile(__dirname+"\\login.html");
})

app.get("/signUp",(req,res)=> {
    res.sendFile(__dirname+"\\signUp.html");
})

app.get("/checkuser",(req,res)=> {
    let email = req.query.email;            // to receive data from get
    let pass = req.query.pass;              // to receive data from get
    // if(email=="raj@gmail.com" && pass=="123"){
    //     res.send("Successfully login");
    // }else {
    //     res.send("Failure try once again")
    // }
    let loginDatails = JSON.parse(fs.readFileSync("login.json"));
    let result = loginDatails.find(ll=>ll.email==email && ll.pass==pass);
    if(result != undefined){
            res.send("Successfully Login");
    }else {
        alert("Invalid email id or password");
        res.sendFile(__dirname+"\\login.html");
    }
});

app.post("/accountcreate",(req,res)=> {
    let login = req.body;     // to receive data from post method. 
    let loginDatails = JSON.parse(fs.readFileSync("login.json"));
    let result = loginDatails.find(ll=>ll.email==login.email);
    if(result==undefined){
            loginDatails.push(login);       // add login details in array variable. 
            fs.writeFileSync("login.json",JSON.stringify(loginDatails));
           // res.send("Account created..")
           alert("Account created successfully");
           res.sendFile(__dirname+"\\login.html");
    }else {
           // res.send("Account already exists");
           alert("Account already exists");
           res.sendFile(__dirname+"\\login.html");
    }
    //console.log(login);
    //res.send("Post method");
})
app.listen(3000,()=>console.log("Server running on port number 3000"))
