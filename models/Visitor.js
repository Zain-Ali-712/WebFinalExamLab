const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  dateOfVisit: Date,
  attractionsVisited: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Attraction' }],
});

module.exports = mongoose.model('Visitor', visitorSchema);
