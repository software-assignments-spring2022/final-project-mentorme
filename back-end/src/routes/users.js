const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');
const passportConf = require('../passport');
const User = require('../models/Users')


const { validateBody, schemas } = require('../helpers/routeHelpers');
const UsersController = require('../controllers/users');

router.route('/signup').post(validateBody(schemas.authSchema), UsersController.signUp);
router.route('/signin').post(validateBody(schemas.authSchema), passport.authenticate('local', { session: false }), UsersController.signIn);
router.route('/secret').get(passport.authenticate('jwt', { session: false }), UsersController.secret);
//get a user
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const email = req.query.email;
  try {
    const user = userId ? await User.findById(userId) : await User.findOne({ email: email });
    res.status(200).json(user);
  }
  catch (err) {
    res.status(500).json(err);
  }
})
module.exports = router;