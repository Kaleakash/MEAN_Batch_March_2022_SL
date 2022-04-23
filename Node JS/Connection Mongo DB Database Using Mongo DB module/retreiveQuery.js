// loading the module and creating the reference of mongo db
let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
obj.connect(url,(err,client)=> {

    if(!err){
        //console.log("connected successfully")
        let db = client.db("meanbatch4");       // refer to that database 

       // let cursor = db.collection("Employees").find({});
      // let cursor = db.collection("Employees").find({_id:1});
      //let cursor = db.collection("Employees").find({city:"Bangalore"});
      let e_salary = 25000;
      let cursor = db.collection("Employees").find({salary:{$gt:e_salary}});
        cursor.forEach(e=> {
            console.log("id is "+e._id+" Name is "+e.name)
           // console.log(e);
            client.close();
        })

    }else {
        console.log(err)
    }

   // client.close(); 
})
