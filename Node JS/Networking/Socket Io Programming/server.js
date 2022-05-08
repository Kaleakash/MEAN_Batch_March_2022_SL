let express = require("express");
let app = express();

// load the http module and createt the server using express module 
// reference. 
let http = require("http").createServer(app);
// create the reference of socket io and pass the 
// reference of http using iife style. 
let io = require("socket.io")(http);

app.get("/",(req,res)=> {
    res.sendFile(__dirname+"//index.html");
})
// This function get call if any client application connected through web socket or socket io
io.on("connection",(socket)=> {
    console.log("Client connected this application");
    //To receive the message from client 
    socket.on("obj",(msg)=> {
        console.log(msg);
    })

    socket.emit("obj1","Hello Client, Welcome to Socket IO Programming");
})

// please run the application using http refernce not express reference. 
http.listen(8080,()=>console.log("Server running on number 8080"));