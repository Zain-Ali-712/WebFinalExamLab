const express = require('express');
const attractionController = require('../controllers/attractionController');
const router = express.Router();

// Display all attractions
router.get('/', attractionController.getAllAttractions);

// Add a new attraction
router.post('/', attractionController.createAttraction);

module.exports = router;
