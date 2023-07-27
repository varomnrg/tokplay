const passport = require("passport");
const router = require("express").Router();
const commentsController = require("../controller/comments");
const { celebrate, Segments } = require("celebrate");
const { videoComment } = require("../utils/validationSchema");

// Get video comment list
router.get("/list/:videoId", commentsController.getVideoComments);

// Post video comment
router.post(
    "/:videoId",
    celebrate({
        [Segments.BODY]: videoComment,
    }),
    passport.authenticate("jwt", { session: false }),
    commentsController.postVideoComment
);

module.exports = router;
