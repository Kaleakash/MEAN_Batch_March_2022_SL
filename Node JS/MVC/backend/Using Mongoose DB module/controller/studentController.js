let studentRepository = require("../repository/studentRepository");


let storeStudentInfo = async (req,res)=> {
    let student = req.body;
    try {
        let result = await studentRepository.storeStudentInfo(student);
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}

let findStudentInfo = async (req,res)=> {
    try {
        let result  = await studentRepository.retrieveStudentInfo();
        res.send(result);
    } catch (error) {
        res.send(error);
    }
}
let updateStudentInfo = async (req,res)=> {
    let student = req.body;
    try {
        let result = await studentRepository.updateStudentInfo(student);
        // res.send(result);
        if(result.modifiedCount>0){
            res.send("Record updated sucessfully")
        }else if (result.matchedCount>0){
            res.send("Record present but didn't update")
        }else {
            res.send("Record didn't update")
        }
    } catch (error) {
        res.send(error);
    }
}
let deleteStudentInfo = async (req,res)=> {
    let id = req.params._id;
    try {
        let result = await studentRepository.deleteStudentInfo(id);
        // res.send(result);
        if(result.deletedCount>0){
            res.send("Record deleted successfully")
        }else {
            res.send("Record not present")
        }
    } catch (error) {
        res.send(error);
    }
}


module.exports={storeStudentInfo,findStudentInfo,updateStudentInfo,deleteStudentInfo}