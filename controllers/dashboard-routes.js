const router = require('express').Router();
const sequelize = require('../config/connection');
const { Dog, Owner, Trainer } = require('../models'); 

router.get('/owners/dashboard/edit/:id', (req, res) => {
  const post = dbPostData.get({ plain: true });

  res.render('edit-profile', {
    post,
    loggedIn: true
  });

});

module.exports = router;