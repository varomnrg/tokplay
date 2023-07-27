const User = require("../models/users");
const { NotFoundError } = require("../utils/errors");

exports.getUserName = async (userId) => {
    const user = await User.findById(userId);
    if (!user) throw new NotFoundError("User not found");
    return user.username;
};
