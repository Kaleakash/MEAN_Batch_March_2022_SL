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

// http://localhost:3000/api/user/signIn
/*
{
    "email":"raj@gmail.com",
    "password":"123",
    "type_of_user":"user"
}
*/
router.post("/signIn",userController.signIn);


module.exports = router;