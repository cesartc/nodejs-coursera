const express = require('express');
const http = require('http');
// const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

// app.use(bodyParser.json());



app.all('/dishes', (req, res, next) => {
  console.log("here!");  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  next();
});

app.get('/dishes', function(req, res, next) {
  console.log('IN POST');
  console.log(req.params);
  res.end('<h1>Will send the dishes to you!</h1>');
});

app.post('/dishes', (req, res, next) => {
  console.log(req.body);
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log('running');
});