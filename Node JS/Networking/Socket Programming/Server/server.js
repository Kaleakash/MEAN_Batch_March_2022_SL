let net = require("net");
let server = net.createServer();

let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// This function get called only if any client send the reqeust to 
// this application using port number 8080
server.on("connection",(socket)=> {
    console.log("Client send the request to server");

    // This function is use to receive value from client node
    socket.on("data",(msg)=> {
        console.log(msg.toString());        // convert buffer to string 
    })

    // It is use to send the message to Client application. 
    socket.write("Hello Client, Welcome to Socket Programming....")

    // this code is use to send the data to client node again and again 
    obj.on("line",(input)=> {
        // This code pass the value to server. 
        socket.write(`From server: ${input}`);
    })
})




server.listen(8080,"localhost",()=>console.log("Server running on port number 8080"));