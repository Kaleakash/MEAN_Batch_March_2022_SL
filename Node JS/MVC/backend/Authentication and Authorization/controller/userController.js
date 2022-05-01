let userRepository = require("../repository/userRepository")

let signUp = async (req,res)=> {
    let user = req.body;
    try{
    let result = await userRepository.signUp(user);
    res.json(result);
    }catch(error){
        res.json(error);
    }
}




module.exports = {signUp}