const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');

const host = 'localhost';
const port = 3000;
const app = express();

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
