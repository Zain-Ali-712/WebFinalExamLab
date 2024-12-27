const Review = require('../models/review');
const Attraction = require('../models/attraction');

// Create a new review for an attraction
exports.createReview = async (req, res) => {
  const { reviewText, rating } = req.body;
  const attractionId = req.params.attractionId;

  const review = new Review({
    user: req.user._id,
    attraction: attractionId,
    reviewText,
    rating,
  });

  try {
    await review.save();
    res.redirect(`/attractions/${attractionId}`);
  } catch (err) {
    console.log(err);
    res.status(500).send('Error saving review');
  }
};
