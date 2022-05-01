let userModel = require("../model/userModel");
let bcrypt = require("bcryptjs");

let signUp = async (user)=> {

    // convert our passwort in hash password. 
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(user.password,salt);
    user.password = hashPassword;
    try {
    return userModel.insertMany(user);
    } catch (error) {
        return error;
    }
}


module.exports={signUp}