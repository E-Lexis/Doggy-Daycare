const router = require("express").Router();

const trainerRoutes = require('./trainer-routes');

router.use('/trainers', trainerRoutes)

module.exports = router;
