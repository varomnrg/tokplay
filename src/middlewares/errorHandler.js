// Main error handler middleware
const errorHandler = (err, req, res, next) => {
    switch (err.name) {
        case "NotFoundError":
        case "AuthenticationError":
        case "AuthorizationError":
            return res.status(err.statusCode).json({
                status: "error",
                message: err.message,
                errors: err.errors,
            });
        case "MongoServerError":
            if (err.code === 11000) {
                return res.status(400).json({
                    status: "error",
                    message: "field already exist",
                    errors: err.keyValue,
                });
            }
            break;
        case "CastError":
            return res.status(400).json({
                status: "error",
                message: "Invalid ID",
            });
        default:
            return res.status(500).json({
                status: "error",
                message: "Internal Server Error",
            });
    }
    next();
};

module.exports = errorHandler;
