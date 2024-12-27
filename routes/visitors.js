const express = require('express');
const visitorController = require('../controllers/visitorController');
const router = express.Router();

// Add a new visitor
router.post('/', visitorController.addVisitor);

module.exports = router;
