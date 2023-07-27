const ProductServices = require("../services/products");

exports.getProductsList = async (req, res, next) => {
    try {
        const { videoId } = req.params;
        const productList = await ProductServices.getAllVideoProducts(videoId);
        return res.json({
            data: productList,
        });
    } catch (err) {
        next(err);
    }
};

exports.getProductDetail = async (req, res, next) => {
    try {
        const { productId } = req.params;
        const productDetails = await ProductServices.getProductDetails(productId);
        return res.json({
            data: productDetails,
        });
    } catch (err) {
        next(err);
    }
};

exports.postProduct = async (req, res, next) => {
    try {
        const { name, price, description, videoId, imageUrl, productUrl } = req.body;
        const newProduct = await ProductServices.createProduct(name, price, description, videoId, imageUrl, productUrl);
        return res.json({
            data: newProduct,
        });
    } catch (err) {
        next(err);
    }
};

exports.getProducts = async (req, res, next) => {
    try {
        const products = await ProductServices.getAllProducts();
        return res.json({
            data: products,
        });
    } catch (err) {
        next(err);
    }
};
