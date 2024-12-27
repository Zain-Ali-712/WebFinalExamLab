const mongoose = require('mongoose');

const attractionSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  rating: Number,
});

module.exports = mongoose.model('Attraction', attractionSchema);
