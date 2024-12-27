const { body, validationResult } = require('express-validator');

exports.validateAttraction = [
  body('name').notEmpty().withMessage('Name is required'),
  body('location').notEmpty().withMessage('Location is required'),
  body('entryFee').isFloat({ min: 0 }).withMessage('Entry fee must be a non-negative number'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateVisitor = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email')
    .isEmail().withMessage('Invalid email format')
    .custom(async (value, { req }) => {
      const Visitor = require('../models/Visitor');
      const visitor = await Visitor.findOne({ email: value });
      if (visitor) throw new Error('Email already exists');
      return true;
    }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

exports.validateReview = [
  body('score')
    .isInt({ min: 1, max: 5 }).withMessage('Score must be between 1 and 5'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
