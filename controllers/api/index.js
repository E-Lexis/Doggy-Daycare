const router = require("express").Router();

const dogRoutes = require('./dog-routes');
const trainerRoutes = require('./trainer-routes');
const ownerRoutes = require('./owner-routes');

router.use('/dogs', dogRoutes);
router.use('/trainers', trainerRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;