let userModel = require("../model/userModel");
let bcrypt = require("bcryptjs");
let jwt = require("jsonwebtoken");

let signUp = async (user)=> {

    // convert our passwort in hash password. 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password,salt);
    user.password = hashPassword;
    try {
    let result = await userModel.insertMany(user);
    if(result){
        let payload = {"email":result.email,"type_of_user":result.type_of_user};
        let token = jwt.sign(payload,"my-key");
        return token;
    }
    } catch (error) {
        return error;
    }
}

let signIn = async (user)=> {
    let result = await userModel.findOne({email:user.email});
    if(result){
        let validPassword = await bcrypt.compare(user.password,result.password);
        if(!validPassword){
            return "Invalid password";
        }else {
            let payload = {"email":result.email,"type_of_user":result.type_of_user};
            let token = jwt.sign(payload,"my-key");
            return token;
        }
    }else {
        return "InValid email Id";
    }
}

module.exports={signUp,signIn}