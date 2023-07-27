const { celebrate, Segments } = require("celebrate");
const router = require("express").Router();
const authController = require("../controller/auth");
const { createUser, loginUser } = require("../utils/validationSchema");

// Register user
router.post(
    "/register",
    celebrate({
        [Segments.BODY]: createUser,
    }),
    authController.register
);

// Login user
router.post(
    "/login",
    celebrate({
        [Segments.BODY]: loginUser,
    }),
    authController.login
);

module.exports = router;
