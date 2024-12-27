const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const session = require('express-session');
const authMiddleware = require('./middlewares/authMiddleware');

const attractionRoutes = require('./routes/attractions');
const visitorRoutes = require('./routes/visitors');
const reviewRoutes = require('./routes/reviews');

const app = express();

// Middleware setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Session configuration
app.use(
  session({
    secret: 'tourism_secret_key',
    resave: false,
    saveUninitialized: false,
  })
);

// Authentication middleware for all protected routes
app.use(authMiddleware);

// Routes
app.use('/attraction', attractionRoutes);
app.use('/visitor', visitorRoutes);
app.use('/review', reviewRoutes);

// EJS setup
app.set('view engine', 'ejs');
app.set('views', './views');

// MongoDB connection
mongoose
  .connect('mongodb://127.0.0.1:27017/tourismDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection failed:', err));

// Default route
app.get('/', (req, res) => {
  res.render('index');
});

// Start server
const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port http://localhost:${PORT}`));
