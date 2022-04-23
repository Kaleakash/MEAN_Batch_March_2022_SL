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

