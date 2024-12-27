const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();


const authMiddleware = require('./middlewares/authMiddleware');

app.get('/protected', authMiddleware, (req, res) => {
    res.send(`Welcome, user with ID: ${req.user.id}`);
});

// Signup route
router.post('/signup', signup);

// Login route
router.post('/login', login);

module.exports = router;
