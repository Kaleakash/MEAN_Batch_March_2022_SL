let net = require("net");
let readline = require("readline");
let obj = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

let client = net.createConnection("8080","localhost",()=> {
    console.log("Client send the request to server");

    // From client side we are sending data to server node
    client.write("Hello Server, I Am client!");
})

// This function is use to receive the value from server application
client.on("data",(msg)=> {
    console.log(msg.toString())
});
// This function get call again and again after hit enter key. 
obj.on("line",(input)=> {
    // This code pass the value to server. 
    client.write(`From client: ${input}`);
})