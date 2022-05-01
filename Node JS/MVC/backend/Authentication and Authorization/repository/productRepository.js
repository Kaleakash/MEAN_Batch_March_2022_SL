let productModel = require("../model/productModel");

let storeProduct = (product)=> {
    return productModel.insertMany(product);
}

let retrieveProduct = ()=> {
    return productModel.find({});
}

module.exports = {storeProduct,retrieveProduct}