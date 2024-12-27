const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  attraction: { type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' },
  reviewText: String,
  rating: Number,
});

module.exports = mongoose.model('Review', reviewSchema);
