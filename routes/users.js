const express = require('express');
const passport = require('passport');
const User = require('../models/user');
const router = express.Router();

// Sign up page
router.get('/signup', (req, res) => {
  res.render('sign-up');
});

// Sign up logic
router.post('/signup', (req, res) => {
  User.register(new User({ username: req.body.username, email: req.body.email }), req.body.password, (err, user) => {
    if (err) {
      console.log(err);
      return res.redirect('/users/signup');
    }
    passport.authenticate('local')(req, res, () => {
      res.redirect('/');
    });
  });
});

// Login page
router.get('/login', (req, res) => {
  res.render('login');
});

// Login logic
router.post('/login', passport.authenticate('local', {
  successRedirect: '/',
  failureRedirect: '/users/login',
}));

// Logout logic
router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
