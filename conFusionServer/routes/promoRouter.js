const express = require('express');

const router = express.Router();

router.route('/')
  .get((req, res, next) => {
    res.end('Will send all the promos to you!');
  })
  .post((req, res, next) => {
    res.end(`Will add the promo: ${req.body.name} with details: ${req.body.description}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
  })
  .delete((req, res, next) => {
    res.end('Deleting all promos');
  });

router.route('/:promoId')
  .get((req, res, next) => {
    res.end(`Will send details of the promo: ${req.params.promoId} to you!`);
  })
  .post((req, res, next) => {
    res.end(`POST operation not supported on /promos/' ${req.params.promoId}`);
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
  })
  .delete((req, res, next) => {
    res.end(`Deleting promo: ${req.params.promoId}`);
  });

module.exports = router;
