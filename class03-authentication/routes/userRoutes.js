const express = require('express');

const bodyParser = require('body-parser');
const User = require('../models/users');

const router = express.Router();
router.use(bodyParser);

router.post('signup', (req, res, next) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (user != null) {
        const error = new Error(`User ${req.body.username} already exists`);
        error.status = 403;
        next(error);
      } else {
        return User.create({
          username: req.body.username,
          password: req.body.password,
        });
      }
    })
    .then((user) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json({ status: 'Registration successfull', user });
    });
});


module.exports = router;