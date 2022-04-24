let express = require("express");       // load the express module 
let router = express.Router();      // it will give the router reference 
let studentController = require("../controller/studentController"); // controller reference 

// http://localhost:3000/api/student/storeStudent
router.post("/storeStudent",studentController.storeStudent);
// http://localhost:3000/api/student/findAllStudent
router.get("/findAllStudent",studentController.findAllStudent);

// http://localhost:3000/api/student/updateStudentGrade 
router.put("/updateStudentGrade",studentController.updateStudentGrade);

// http://localhost:3000/api/student/deleteStudentInfo/1

router.delete("/deleteStudentInfo/:_id",studentController.deleteStudentInfo)
module.exports=router;

