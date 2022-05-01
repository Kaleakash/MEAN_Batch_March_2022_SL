let express = require("express");
let router = express.Router();
let userController = require("../controller/userController");

// http://localhost:3000/api/user/signUp 
/*
{
    "email":"raj@gmail.com",
    "password":"123",
    "name":"raj",
    "type_of_user":"user"
}

*/
router.post("/signUp",userController.signUp);


module.exports = router;