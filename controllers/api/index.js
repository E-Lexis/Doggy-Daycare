const router = require("express").Router();

const userRoutes = require("./user-routes.js");
const dogRoutes = require("./dog-routes.js");
const commentRoutes = require('./comment-routes.js');

router.use("/users", userRoutes);
router.use("/dogs", dogRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
