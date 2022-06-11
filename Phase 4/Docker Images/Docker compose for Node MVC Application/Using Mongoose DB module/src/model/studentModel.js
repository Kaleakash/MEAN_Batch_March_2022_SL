let mongoose = require("mongoose");
mongoose.pluralize(null);       // to avoid to follow pluralize form 
//it is use to create the structure for the collection 
let studentSchema = mongoose.Schema({
    _id:Number,
    first_name:{type:String,
        required:[true,"First Name required"],
        minLength:4,
        maxLength:10},

    last_name:{type:String,
        required:false},

    class:{type:String,
        required:[true,"class is required"]},

    grade:{type:String,
        required:[true,"grade required"]},
        
    age:{type:Number,
        require:[true,"age must be required"],
        min:6,
        max:21},

    address:{type:String,
        required:[true,"Address required"]}
});
//1st parameter is collection name and 2nd parameter is schema details 
// by default mongoose follow plular it will create collection name is lower case with s post fix. 
let studentModel = mongoose.model("Student",studentSchema);

module.exports=studentModel;