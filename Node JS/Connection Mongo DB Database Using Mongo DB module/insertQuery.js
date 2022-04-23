// loading the module and creating the reference of mongo db
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {

    if(!err){
        //console.log("connected successfully")
        let db = client.db("meanbatch4");       // refer to that database 

        let emp = {_id:14,name:"Raju",salary:36000,deptId:101,city:"Mumbai"};

        db.collection("Employees").insertOne(emp,(e,result)=> {
            
            if(!e){
                console.log("Record inserted successfully")
                console.log(result);
            }else {
                console.log("Error generated "+e);
            }
            client.close();
        })
       // client.close();
    }else {
        console.log(err)
    }

   // client.close(); 
})
