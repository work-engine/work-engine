// INITIALIZE PASSPORT SETUP
const passPortSetup = require('./passport.js');
const passport = require('passport');
// var session = require('express-session');

// COOKIES
const cookieSession = require('cookie-session');
const Keys = require('../config/keys');
const User = require('./models/userModel.js');

// EXPRESS SERVER
const express = require('express');
const app = express();

// MIDDLEWARE - FOR PARSING OF FORMS AND JSON
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// MIDDLEWARE - FOR PATH
const path = require('path');

// WEB SOCKETS - AND RELATED DEPENDENCIES
// const http = require('http');
// const server = http.createServer(app);
// const io = require('socket.io').listen(server);

//INITIALIZING PASSPORT AND EXPRESS SESSION
// app.use(session({ secret: '-- ENTER CUSTOM SESSION SECRET --' }));

passport.use(passport.initialize());
passport.use(passport.session());

//SERIALIZES USER.ID AND ATTACHES IT TO A COOKIE
passport.serializeUser(function(user, done) {
  console.log('serializeUser============ ', user.id);
  // placeholder for custom user serialization
  // null is for errors
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  // placeholder for custom user deserialization.
  // maybe you are going to get the user from mongo by id?
  // null is for errors
  User.findById(id).then(user => {
    done(null, user);
  });
});

// COOKIE SESSION // ENCRYPTS COOKIE - SET NAME, AGE (24 HOURS), AND KEY
app.use(
  cookieSession({
    name: "I'M A COOKIE",
    maxAge: 24 * 60 * 60 * 1000,
    keys: [Keys.cookieKey]
  })
);

// ROUTERS - FOR API
const amazonRouter = require('./routers/amazonRouter');
const historyRouter = require('./routers/historyRouter');

// DATABASE
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost/work_engine';
mongoose.connect(mongoURI);

// DEFAULT PATH FOR STATIC FILES - SERVES INDEX.HTML
app.use(express.static(path.join(__dirname, './../client')));

// ROUTES
app.use('/api/amazon', amazonRouter);
app.use('/api/history', historyRouter);

// SETTING UP PASSPORT
app.use(passport.initialize());
// app.use(express.session());
app.use(passport.session());
// app.get("/auth/amazon/callback", passport.authenticate("amazon", {failureRedirect: "/"}),

// ROUTES
app.use('/api/amazon', amazonRouter);
app.get('/auth/amazon', passport.authenticate('amazon', { scope: ['profile'] }));
app.get('/auth/amazon/callback', passport.authenticate('amazon'), (req, res) => {
  res.sendFile(path.join(__dirname, '../client/loggedIn.html'));
});
app.get('/api/logout', (req, res) => {
  req.logout();
  res.sendFile(path.join(__dirname, '../client/index.html'));
});
app.get('/api/current_user', (req, res) => {
  res.send(req.user);
});

// INTERCEPTS ALL STRAY REQUESTS
app.all('*', (req, res, next) => {
  console.log('catch all on the root');
  err = new Error('index.js - default catch all route - not found');
  err.functionName = 'server.js';
  err.status = 404;
  next(err);
});

// GLOBAL ERROR CATCHER
app.use((err, req, res, next) => {
  const error = err.functionName ? `${err.functionName} ${err}` : err;
  const errorStatus = err.status ? err.status : 500;
  res.status(errorStatus).end(`Server.js - ${error}`);
});

// EXPRESS SERVER - LISTEN ON 3000
app.listen(3000, () => console.log('Server is now listening on port 3000'));
