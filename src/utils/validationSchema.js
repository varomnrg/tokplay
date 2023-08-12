const Joi = require("joi");

const createUser = Joi.object().keys({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
    email: Joi.string().email().required(),
});

const loginUser = Joi.object().keys({
    username: Joi.string().min(3).max(30).required(),
    password: Joi.string().required(),
});

const productDetails = Joi.object().keys({
    productId: Joi.string().required(),
});

const productList = Joi.object().keys({
    videoId: Joi.string().required(),
});

const addProduct = Joi.object().keys({
    name: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    videoId: Joi.string().required(),
    imageUrl: Joi.string().required(),
    productUrl: Joi.string().required(),
});

const videoThumbnailList = Joi.object().keys({
    tags: Joi.string().optional(),
    q: Joi.string().optional(),
});

const videoDetails = Joi.object().keys({
    videoId: Joi.string().required(),
});

const addVideo = Joi.object().keys({
    videoId: Joi.string().required(),
    title: Joi.string().required(),
    channel: Joi.string().required(),
    tags: Joi.array().required(),
});

const videoComment = Joi.object().keys({
    comment: Joi.string().required(),
});

const getUser = Joi.object().keys({
    userId: Joi.string().required(),
});

module.exports = {
    createUser,
    loginUser,
    productDetails,
    productList,
    addProduct,
    videoThumbnailList,
    videoDetails,
    addVideo,
    videoComment,
    getUser,
};
