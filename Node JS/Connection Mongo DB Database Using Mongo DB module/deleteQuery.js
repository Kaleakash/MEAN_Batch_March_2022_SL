// loading the module and creating the reference of mongo db
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {

    if(!err){
        //console.log("connected successfully")
        let db = client.db("meanbatch4");       // refer to that database 

       db.collection("Employees").deleteOne({_id:3},(e,result)=> {
           if(!e){
                //console.log(result)
                if(result.deletedCount>0){
                        console.log("Record deleted successfully")
                }else {
                        console.log("Record not present")
                }
           }else {
                console.log("Error generated "+e);
           }
           client.close();
       })

    }else {
        console.log(err)
    }

   // client.close(); 
})
