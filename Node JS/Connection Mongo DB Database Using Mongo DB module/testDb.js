// loading the module and creating the reference of mongo db
let obj = require("mongodb").MongoClient;

let url = "mongodb://localhost:27017";

obj.connect(url,(err,client)=> {

    if(!err){
        console.log("connected successfully")
    }else {
        console.log(err)
    }

    client.close(); 
})
