const Attraction = require('../models/attraction');

// Get all attractions
exports.getAllAttractions = async (req, res) => {
  try {
    const attractions = await Attraction.find();
    res.render('attractions', { attractions });
  } catch (err) {
    console.log(err);
    res.status(500).send('Error fetching attractions');
  }
};

// Create a new attraction
exports.createAttraction = async (req, res) => {
  const { name, description, location, rating } = req.body;
  const newAttraction = new Attraction({ name, description, location, rating });
  try {
    await newAttraction.save();
    res.redirect('/attractions');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding attraction');
  }
};
