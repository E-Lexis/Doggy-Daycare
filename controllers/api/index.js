const router = require("express").Router();

const trainerRoutes = require('./trainer-routes');
const ownerRoutes = require('./owner-routes');

router.use('/trainers', trainerRoutes);
router.use('/owners', ownerRoutes);

module.exports = router;
