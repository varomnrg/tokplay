const AuthServices = require("../services/auth");

exports.register = async (req, res, next) => {
    try {
        const payload = req.body;
        const result = await AuthServices.register(payload);
        return res.status(201).json({
            data: result,
        });
    } catch (error) {
        next(error);
    }
};

exports.login = async (req, res, next) => {
    try {
        const payload = req.body;
        const result = await AuthServices.login(payload);
        return res.status(200).json({
            token: result.token,
        });
    } catch (error) {
        next(error);
    }
};
