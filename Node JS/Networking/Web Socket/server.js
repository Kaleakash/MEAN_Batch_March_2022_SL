let express = require("express");

let app = express();

//IIFE : Immediate Invoke function expression. 

let ws = require("express-ws")(app);
// http://localhost:8080/
app.get("/",(req,res)=> {
    res.sendFile(__dirname+"\\index.html");
})


// This line will execute any web socket client program call..
app.ws("/",(socket,req)=> {
    // This message display on server console. 
    console.log("Client Application connected successfully....");

    //This function is use to receive the value from Client Appliction ie browser. 
    socket.on("message",(msg)=> {
        console.log(msg);

        socket.send("Welcome "+msg);
    })
    // Send this message to Server to client
    socket.send("Hello, Client Welcome to Web Socket Programming....")
})


app.listen(8080,()=>console.log("server running on port number 8080"));