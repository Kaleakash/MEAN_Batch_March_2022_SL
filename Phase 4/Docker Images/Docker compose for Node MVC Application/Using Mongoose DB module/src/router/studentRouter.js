let express = require("express");
let router = express.Router();
let studentController = require("../controller/studentController");

// http://localhost:3000/api/student/storeStudent
router.post("/storeStudent",studentController.storeStudentInfo);

// http://localhost:3000/api/student/findStudentInfo
router.get("/findStudentInfo",studentController.findStudentInfo);

// http://localhost:3000/api/student/updateStudentGrade
router.put("/updateStudentGrade",studentController.updateStudentInfo);

// http://localhost:3000/api/student/deleteStudentInfo
router.delete("/deleteStudentInfo/:_id",studentController.deleteStudentInfo);

module.exports=router;