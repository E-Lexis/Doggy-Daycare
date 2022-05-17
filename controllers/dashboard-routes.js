const router = require('express').Router();
const sequelize = require('../config/connection');
const { Dog, Owner, Trainer } = require('../models');

router.get('/owners/dashboard', (req, res) => {
  res.render('owner-dashboard');
});

router.get('/trainers/dashboard', (req, res) => {
  res.render('trainer-dashboard');
});

