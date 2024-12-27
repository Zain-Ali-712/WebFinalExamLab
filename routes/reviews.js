const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express.Router();

// Add a new review
router.post('/:attractionId', reviewController.createReview);

module.exports = router;
