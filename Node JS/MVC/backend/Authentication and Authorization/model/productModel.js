const mongoose = require("mongoose");
mongoose.pluralize(null);

const productSchema = new mongoose.Schema({
    _id :{type:Number},
    pname:{type:String},
    price:{type:Number}
});
const productModel = mongoose.model("Product",productSchema);
module.exports=productModel;

