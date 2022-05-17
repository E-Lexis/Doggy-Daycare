module.exports.isAuth = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res
    .status(401)
    .json({ msg: "You are not authorized to view this resource" });
  }
};

var router = require("express").Router();

router.get("/owner-login", function (req, res, next) {
  res.render("owner-login");
});

router.get("/trainer-login", function (req, res, next) {
  res.render("trainer-login");
});

module.exports = router;
