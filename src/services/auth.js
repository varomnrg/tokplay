const User = require("../models/users");
const { NotFoundError, AuthenticationError } = require("../utils/errors");
const jwt = require("jsonwebtoken");

exports.login = async (payload) => {
    const user = await User.findOne({ username: payload.username });
    if (!user) throw new NotFoundError("User not found");
    const isValid = await user.comparePassword(payload.password);
    if (!isValid) throw new AuthenticationError("Password is incorrect");
    var token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    return {
        token: "Bearer " + token,
    };
};

exports.register = async (payload) => {
    const user = new User({
        username: payload.username,
        email: payload.email,
        password: payload.password,
    });

    const result = await user.save();

    return {
        id: result._id,
        username: result.username,
        email: result.email,
        password: result.password,
    };
};
