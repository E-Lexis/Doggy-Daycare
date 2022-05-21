const router = require('express').Router();
const sequelize = require('../config/connection');
const { Dog, Owner, Trainer } = require('../models');
//const isAuth = require('../utils/auth');

router.get('/', (req, res) => {
  res.render('owner-dashboard');
});
// router.get('/', isAuth, (req, res) => {
//   Owner.findAll({
//     where: {
//       id: req.params.id
//     },
//     attributes: [
//       'id',
//       'first_name',
//       'last_name'
//     ],
//     include: [
//       {
//         model: Dog,
//         attributes: ['name', 'breed', 'age', 'size'],
//         include: {
//           model: Owner,
//           attributes: ['first_name']
//         }
//       },
//       {
//         model: Owner,
//         attributes: ['first_name']
//       }
//     ]
//   })
//     .then(dbOwnerData => {
//       const ownerInfo = dbOwnerData.map(owner => owner.get({ plain: true }));
//       res.render('owner-dashboard', { ownerInfo, loggedIn: true });
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

router.get('/owners/dashboard/edit/:id', (req, res) => {
  const post = dbPostData.get({ plain: true });

  res.render('edit-profile', {
    post,
    loggedIn: true
  });

});

module.exports = router;