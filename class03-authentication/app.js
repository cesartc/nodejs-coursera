const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const host = 'localhost';
const port = 3000;
const app = express();

app.use(session({
  name: 'session-id',
  secret: '123456',
  saveUninitialized: false,
  resave: false,
  store: new FileStore(),
}));

function auth(req, res, next) {
  console.log('HEADERS:', req.headers);
  console.log('SESSION:', req.session);

  if (!req.session.user) {
    const authHeader = req.headers.authorization;
    if (!authHeader) {
      const err = new Error('You are not authenticated!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }

    const auth = new Buffer(authHeader.split(' ')[1], 'base64').toString().split(':');
    const username = auth[0];
    const password = auth[1];

    if (username === 'admin' && password === '123') {
      req.session.user = 'admin';
      next();
    } else {
      const err = new Error('Invalid Credentials!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }
  } else {
    if (req.session.user === 'admin') {
      next();
    } else {
      const err = new Error('Invalid Credentials!');
      res.setHeader('WWW-Authenticate', 'Basic');
      err.status = 401;
      return next(err);
    }
  }
}

app.use(auth);

const mongodbUrl = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(mongodbUrl);

connect.then((db) => {
  console.log('Connected to DB...');
}, error => console.log(error));

app.use(bodyParser.json());

app.use('/promos', promoRouter);
app.use('/leaders', leaderRouter);

const server = http.createServer(app);

server.listen(port, host, () => {
  console.log('In server...');
});
