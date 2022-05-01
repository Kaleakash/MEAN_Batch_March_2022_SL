let productRepository = require("../repository/productRepository");

let storeProduct = async (req,res)=> {
    let product  = req.body;
    try {
        let result = await productRepository.storeProduct(product);
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

let retrieveProduct = async (req,res)=> {
    try {
        let result = await productRepository.retrieveProduct();
        res.json(result);
    } catch (error) {
        res.json(error);
    }
}

module.exports = {storeProduct,retrieveProduct}