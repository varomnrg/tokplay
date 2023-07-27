const usersServices = require("../services/users");

exports.getUser = async (req, res, next) => {
    try {
        const { userId } = req.params;
        const user = await usersServices.getUser(userId);
        return res.json({
            data: user,
        });
    } catch (err) {
        next(err);
    }
};
