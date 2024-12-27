const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('./models/user');
const attractionsRouter = require('./routes/attractions');
const usersRouter = require('./routes/users');
const reviewsRouter = require('./routes/reviews');
const app = express();

mongoose.connect('mongodb://localhost:27017/tourism', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(session({
  secret: 'tourismSecret',
  resave: false,
  saveUninitialized: true,
}));

app.use('/attractions', attractionsRouter);
app.use('/users', usersRouter);
app.use('/reviews', reviewsRouter);

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/', (req, res) => {
  // Pass the user object to the view
  res.render('index', { user: req.user || null });
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
