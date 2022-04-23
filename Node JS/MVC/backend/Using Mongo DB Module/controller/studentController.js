let studentRepository = require("../repository/studentRepository");

exports.storeStudent = async (req,res)=> {
    let student = req.body;     // get the data from body part 
    try{
    let result = await studentRepository.storeStudent(student);
    if(result.acknowledged){
        res.send("Record stored succesfully...")
    }
    }catch(ex){
        res.send(ex)
    }
}

exports.findAllStudent = async (req,res)=> {

    try{
      let result = await studentRepository.findAllStudent();
      res.json(result);  
    }catch(ex){
        res.json(ex);
    }
}

exports.updateStudentGrade = async (req,res)=> {
    let student = req.body;     // get the data from body part 
    try{
    let result = await studentRepository.updateStudentGrade(student);
    if(result.modifiedCount>0){
        res.send("Record updated successfully")
    }else if(result.matchedCount>0){
        res.send("Record present but din't update")
    }else {
        res.send("Record not present didn't update")
    }
    }catch(ex){
        res.send(ex)
    }
}

