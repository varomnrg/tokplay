const passport = require("passport");
const { celebrate, Segments } = require("celebrate");
const router = require("express").Router();
const usersController = require("../controller/users");
const { getUser } = require("../utils/validationSchema");

// Get User by id
router.get(
    "/profile/:userId",
    celebrate({
        [Segments.PARAMS]: getUser,
    }),
    usersController.getUser
);

//get User by token
router.get("/profile", passport.authenticate("jwt", { session: false }), usersController.getUserByToken);

module.exports = router;
