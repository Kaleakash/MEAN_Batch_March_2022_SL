let obj = require("readline");
let r1 = obj.createInterface({
    input:process.stdin,             // standard input device ie keyboard 
    output:process.stdout
})
// single value 
// r1.question("Enter the name",(name)=> {
//     console.log("Your name is "+name);
//     //r1.close(); 
// })
// continuosly 
// r1.question("Enter the age",(age)=> {
//     console.log("Your age is "+age);
//     r1.close(); 
// })
// r1.on("line",(input)=> {            // after enter it will ask again value 
//     console.log(`You entered ${input}`)
// })
// multiple input 
r1.question("Enter the name",(name)=> {
   
    r1.question("Enter the age",(age)=> {

        r1.question("Enter the city",(city)=> {
            console.log("name is "+name);
            console.log("Age is "+age);
            console.log("city is "+city);           
            r1.close(); 
        })

    })

})

//console.log("name "+name);