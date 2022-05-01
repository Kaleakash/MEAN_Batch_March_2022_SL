const mongoose = require("mongoose");
mongoose.pluralize(null);

const userSchema = new mongoose.Schema({
    email :{type:String,unique:true},
    password:{type:String},
    name:{type:String},
    type_of_user:{type:String}
});
const userModel = mongoose.model("User",userSchema);
module.exports=userModel;

