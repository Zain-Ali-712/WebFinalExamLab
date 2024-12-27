const Visitor = require('../models/visitor');
const Attraction = require('../models/attraction');

// Add a new visitor
exports.addVisitor = async (req, res) => {
  const { name, email, phone, dateOfVisit, attractionsVisited } = req.body;

  const newVisitor = new Visitor({
    name,
    email,
    phone,
    dateOfVisit,
    attractionsVisited,
  });

  try {
    await newVisitor.save();
    res.redirect('/visitors');
  } catch (err) {
    console.log(err);
    res.status(500).send('Error adding visitor');
  }
};
