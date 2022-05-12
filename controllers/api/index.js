const router = require("express").Router();

const trainerRoutes = require('./trainer-routes');
const ownerRoutes = require('./owner-routes');
const dogRoutes = require('./dog-routes');

router.use('/trainers', trainerRoutes);
router.use('/owners', ownerRoutes);
router.use('/dogs', dogRoutes);

module.exports = router;