let express = require("express");
let productController = require("../controller/productController");
let router = express.Router();
let auth = require("../middleware/auth");
// http://localhost:3000/api/product/storeProduct 
/*
{
    "_id":100,
    "pname":"Tv",
    "price":120000
}

*/

//User Router 
// http://localhost:3000/api/product/retrieveProduct 
router.get("/retrieveProduct",auth.verifyToken,auth.isUser,productController.retrieveProduct);


// Admin Router 
router.post("/storeProduct",auth.verifyToken,auth.isAdmin,productController.storeProduct);
router.get("/retrieveProduct",auth.verifyToken,auth.isAdmin,productController.retrieveProduct);



module.exports = router;