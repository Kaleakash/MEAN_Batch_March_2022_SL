let http = require("http");

// this method will execute if any
// client application using browser send the request to 
// this application using url as 
// http://localhost:3000
let server = http.createServer((req,res)=> {
        res.end("Welcome to Simple Node JS Http module");
})


server.listen(3000,()=>console.log("Server running on port number 3000"));