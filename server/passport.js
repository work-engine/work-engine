const passport = require('passport');
const AmazonStrategy = require('passport-amazon').Strategy;
const util = require('util');
const User = require('./models/userModel.js');
const Keys = require('../config/keys.js');

// passport.serializeUser(function(user, done) {
//   // placeholder for custom user serialization
//   // null is for errors
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   // placeholder for custom user deserialization.
//   // maybe you are going to get the user from mongo by id?
//   // null is for errors
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

passport.use(
  new AmazonStrategy(
    {
      clientID: Keys.clientId,
      clientSecret: Keys.clientSecret,
      callbackURL: 'http://localhost:3000/auth/amazon/callback'
    },
    async (req, accessToken, refreshToken, profile, done) => {
      //CHECK IF USER EXISTS IN DB
      User.findOne({ amazonID: profile.id }).then(existingUser => {
        if (existingUser) {
          //ALREADY HAVE THE USER
          console.log('user is: ', existingUser);
          done(null, existingUser);
        } else {
          //ELSE, CREATE USER IN DB
          new User({
            username: profile.displayName,
            amazonID: profile.id
          })
            .save()
            .then(newUser => {
              console.log('new user created: ' + newUser);
              done(null, newUser);
            });
        }
      });

      // const existingUser = await User.findOne({ amazonID: profile.id });
      // if (existingUser) {
      //   return done(null, existingUser);
      // }
      // const user = await new User({ amazonID: profile.id }).save();
      // done(null, user);
    }
  )
);

// console.log('ACESSTOKEN:::::::::: ', accessToken);
// console.log('REFRESHTOKEN::::::::::::::::::', refreshToken);
// console.log('PROFILE:::::::::::::::', profile);
// done(null, profile);
