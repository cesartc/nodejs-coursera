const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());

router.route('/')
.get((req, res, next) => {
  console.log('GET method from router file')
  res.send('ok');
})
.post((req, res, next) => {
  console.log('POST method from router file')
});

module.exports = router;