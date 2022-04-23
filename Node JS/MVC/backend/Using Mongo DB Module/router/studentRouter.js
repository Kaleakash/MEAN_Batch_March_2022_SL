let express = require("express");       // load the express module 
let router = express.Router();      // it will give the router reference 
let studentController = require("../controller/studentController"); // controller reference 

// http://localhost:3000/api/student/storeStudent
router.post("/storeStudent",studentController.storeStudent);


module.exports=router;

