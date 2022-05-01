let jwt = require("jsonwebtoken");

let verifyToken = (req,res,next)=> {
    // check the token is present or not     
    let token = req.headers.authorization;
    if(!token){
        return res.send("Access defined - token not present");
    }else {
        try{
        let verifyUser = jwt.verify(token,"my-key");
        if(!verifyUser){
            return res.send("Unauthorized Request or user");
        }
        req.user = verifyUser;
        next();
        }catch(error){
            return res.send(error);
        }  
    }

}
let isUser = async (req,res,next)=>{
    console.log(req.user);
    if(req.user.type_of_user=="user"){
            next();
    }else {
        return res.send("Unauthorized user!")
    }
}
let isAdmin = async (req,res,next)=> {
    if(req.user.type_of_user=="admin"){
        next();
    }else {
    return res.send("Unauthorized user!")
    }
}
module.exports = {verifyToken,isUser,isAdmin};