const passport = require('passport');
const FacebookTokenStrategy = require('passport-facebook-token');
const config = require('./config');

module.exports.facebookPassport = passport.use(new FacebookTokenStrategy({
  clientID: config.facebook.clientId,
  clientSecret: config.facebook.clientSecret,
}, (accessToken, refreshToken, profile, done) => done(null, profile)));
