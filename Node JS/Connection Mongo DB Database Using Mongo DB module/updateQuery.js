// loading the module and creating the reference of mongo db
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {

    if(!err){
        //console.log("connected successfully")
        let db = client.db("meanbatch4");       // refer to that database 

        db.collection("Employees").updateOne({_id:1},{$set:{salary:30000}},(e,result)=> {
            if(!e){
                   // console.log("Record updated successfully")
                   // console.log(result);
                   if(result.matchedCount>0 && result.modifiedCount>0){
                       console.log("Record updated")
                   }else {
                        console.log("Record not update")
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
