let dbConnection  = require("../config/dbConfig");

let collectionName = "Student";

exports.storeStudent = (student)=> {

    //return dbConnection.getDbCollection(collectionName).find().toArray();
    return dbConnection.getDbCollection(collectionName).insertOne(student);
}

exports.findAllStudent = ()=> {
    return dbConnection.getDbCollection(collectionName).find().toArray();
}


exports.updateStudentGrade = (student)=> {
    return dbConnection.getDbCollection(collectionName).updateOne({_id:student._id},{$set:{grade:student.grade}});
}