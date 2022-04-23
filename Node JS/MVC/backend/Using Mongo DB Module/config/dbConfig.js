let obj = require("mongodb").MongoClient;
let url = "mongodb://localhost:27017";
let dbClient;
exports.dbConnect = ()=> {

    obj.connect(url).
    then(res=>{
        console.log("db connected successfully")
        dbClient=res;
        }
        ).
    catch(error=>console.log("error generated "+error));
   
}

exports.getDbCollection=(name)=> {
    return dbClient.db("meanbatch4").collection(name);
}

