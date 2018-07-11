const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    res.end('Will send all the leaders to you!');
  })
  .post((req, res, next) => {
    res.end(`Will add the leader: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end('Deleting all leaders');
  });

router.route('/:leaderId')
  .get((req, res, next) => {
    res.end(`Will send details of the leader: ${req.params.leaderId} to you!`);
  })
  .post((req, res, next) => {
    res.end(`POST operation not supported on /leaders/' ${req.params.leaderId}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /leaders');
  })
  .delete((req, res, next) => {
    res.end(`Deleting leader: ${req.params.leaderId}`);
  });

module.exports = router;
