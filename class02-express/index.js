const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');


const hostname = 'localhost';
const port = 3000;

const app = express();

app.use('/cookies', dishRouter);


// This is required to parse req bodies
// This will parse all the application/json bodies.
app.use(bodyParser.json());
// app.use(bodyParser.text());


app.all('/dishes', (req, res, next) => {
  console.log("here!");  
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  next();
});

app.get('/dishes', function(req, res, next) {
  console.log('IN POST');
  console.log(req.params);
  res.end('<h1>Will send the dishes to you!</h1>');
});

app.post('/dishes/:dishId', (req, res, next) => {
  console.log("------New:");
  console.log("Request Body:", req.body);
  console.log("Request Params:", req.params);
  console.log("Request Query:", req.query);
  res.end('Will add the dish: ' + req.body.name + ' with ID ' + req.params.dishId);  
});

app.put('/dishes', (req, res, next) => {
  res.statusCode = 403;
  res.end('NOT SUPPORTED');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log('running');
});