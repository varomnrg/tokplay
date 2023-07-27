const mongoose = require("mongoose");
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        name: {
            type: String,
            required: [true, "Please input the product name"],
        },
        price: {
            type: Number,
            required: [true, "Please input the product price"],
        },
        description: {
            type: String,
            required: [true, "Please input the product description"],
        },
        videoId: {
            type: String,
            required: [true, "Please input the video id"],
        },
        imageUrl: {
            type: String,
            required: [true, "Please input the iamge link"],
        },
        productUrl: {
            type: String,
            required: [true, "Please input the product link"],
        },
    },
    { timestamps: true }
);

const Product = mongoose.model("products", ProductSchema);

module.exports = Product;
