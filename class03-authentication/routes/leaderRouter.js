const express = require('express');
const LeaderModel = require('../models/leaders');

const router = express.Router();

router.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res) => {
    LeaderModel.find({})
      .then((leaders) => {
        res.json(leaders);
      }, (err) => {
        res.statusCode = 400;
        res.send('Error listing leaders');
      });
  })
  .post((req, res) => {
    LeaderModel.create(req.body)
      .then((leader) => {
        res.send(leader);
      }, (error) => {
        res.statusCode = 400;
        res.send('Error saving leaders');
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    LeaderModel.remove({})
      .then((resp) => {
        res.json(resp);
      }, (err) => {
        res.statusCode = 400;
        next(err);
      })
      .catch(err => next(err));
  });

router.route('/:leaderId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res) => {
    LeaderModel.findOne({ _id: req.params.leaderId })
      .then((leader) => {
        res.json(leader);
      }, (err) => {
        res.statusCode = 400;
        res.send('Error fetching leader');
      });
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /leaders/${req.params.leaderId}`);
  })
  .put((req, res, next) => {
    LeaderModel.findByIdAndUpdate(req.params.leaderId, { $set: req.body }, { new: true })
      .then((leader) => {
        res.json(leader);
      }, err => next(err));
  })
  .delete((req, res, next) => {
    LeaderModel.findByIdAndRemove(req.params.leaderId)
      .then((resp) => {
        res.json(resp);
      });
  });

module.exports = router;
