var router = require("express").Router();

router.get("/owner-login", function (req, res, next) {
  res.render("owner-login");
});

router.get("/trainer-login", function (req, res, next) {
  res.render("trainer-login");
});

module.exports = router;
