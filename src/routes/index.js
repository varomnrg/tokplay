let router = require("express").Router();

router.use("/videos", require("./videos"));
router.use("/products", require("./products"));
router.use("/comments", require("./comments"));
router.use("/auth", require("./auth"));
router.use("/users", require("./users"));

module.exports = router;
