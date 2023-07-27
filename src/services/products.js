const Product = require("../models/products");
const { NotFoundError } = require("../utils/errors");

exports.getAllVideoProducts = async (videoId) => {
    const productList = await Product.find({ videoId: videoId }, "name price imageUrl");
    return productList;
};

exports.getProductDetails = async (productId) => {
    const product = await Product.findById(productId, "-__v");
    if (!product) throw new NotFoundError("Product not found");
    return {
        name: product.name,
        price: product.price,
        description: product.description,
        imageUrl: product.imageUrl,
        productUrl: product.productUrl,
    };
};

exports.createProduct = async (name, price, description, videoId, imageUrl, productUrl) => {
    const newProduct = new Product({
        name: name,
        price: price,
        description: description,
        videoId: videoId,
        imageUrl: imageUrl,
        productUrl: productUrl,
    });

    const result = await newProduct.save();
    return {
        _id: result._id,
        name: result.name,
        price: result.price,
        description: result.description,
        videoId: result.videoId,
        imageUrl: result.imageUrl,
        productUrl: result.productUrl,
        createdAt: result.createdAt,
    };
};

exports.getAllProducts = async () => {
    const products = await Product.find({}, "-__v").sort({ createdAt: -1 });
    return products;
};
