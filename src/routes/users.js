const { celebrate, Segments } = require("celebrate");
const router = require("express").Router();
const usersController = require("../controller/users");
const { getUser } = require("../utils/validationSchema");

// Get video thumbnail list
router.get(
    "/:userId",
    celebrate({
        [Segments.PARAMS]: getUser,
    }),
    usersController.getUser
);

module.exports = router;
