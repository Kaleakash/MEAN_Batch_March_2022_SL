let url = require("url");
let urlData = "http://www.google.com:80/home?user=Raj&age=21";
console.log(urlData);
//let urlRef = url.parse(urlData);        // it is use to convert string to url 
//let urlRef = url.parse(urlData);   // query property consider as string 
let urlRef = url.parse(urlData,true);   // query property consider as reference  
console.log(urlRef);
console.log(urlRef.protocol);
console.log(urlRef.port)
console.log(urlRef.pathname)
console.log(urlRef.path)
console.log(urlRef.query)  
console.log(urlRef.query.user)
console.log(urlRef.query.age); 
console.log(urlRef.hostname)
