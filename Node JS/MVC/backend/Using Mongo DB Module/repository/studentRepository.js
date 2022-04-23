let dbConnection  = require("../config/dbConfig");

let collectionName = "Student";

exports.storeStudent = (product)=> {

    //return dbConnection.getDbCollection(collectionName).find().toArray();
    return dbConnection.getDbCollection(collectionName).insertOne(product);
}
