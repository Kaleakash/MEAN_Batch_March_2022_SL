let studentModel = require("../model/studentModel");

let storeStudentInfo = (student)=> {
    return studentModel.insertMany(student);
}
let retrieveStudentInfo = ()=> {
    return studentModel.find({});
}
let updateStudentInfo = (student)=> {
    return studentModel.updateOne({_id:student._id},{$set:{grade:student.grade}});
}
let deleteStudentInfo = (id)=> {
    return studentModel.deleteOne({_id:id});
}

module.exports={storeStudentInfo,retrieveStudentInfo,updateStudentInfo,deleteStudentInfo}