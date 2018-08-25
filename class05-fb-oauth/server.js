const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path');
const authenticate = require('./authenticate');

const hostname = 'localhost';
const port = 3443;

const app = express();

passport.serializeUser((user, done) => {
  done(null, user);
});

app.use(bodyParser.json());

app.use(passport.initialize());

app.get('/users', (req, res, next) => {
  res.sendfile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/login/fb/', passport.authenticate('facebook-token'), (req, res) => {
  console.log('Auth:', req.user);
  res.json({ tok: req.user });
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log('running');
});
