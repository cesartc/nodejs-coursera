const express = require('express');
const PromoModel = require('../models/promotions');

const router = express.Router();

router.route('/')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res) => {
    PromoModel.find({})
      .then((promos) => {
        res.json(promos);
      }, (err) => {
        res.statusCode = 400;
        res.send('Error listing promos');
      });
  })
  .post((req, res) => {
    PromoModel.create(req.body)
      .then((promo) => {
        res.send(promo);
      }, (error) => {
        res.statusCode = 400;
        res.send('Error saving promos');
      });
  })
  .put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promos');
  })
  .delete((req, res, next) => {
    PromoModel.remove({})
      .then((resp) => {
        res.json(resp);
      }, (err) => {
        res.statusCode = 400;
        next(err);
      })
      .catch(err => next(err));
  });

router.route('/:promoId')
  .all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    next();
  })
  .get((req, res) => {
    PromoModel.findOne({ _id: req.params.promoId })
      .then((promo) => {
        res.json(promo);
      }, (err) => {
        res.statusCode = 400;
        res.send('Error fetching promo');
      });
  })
  .post((req, res) => {
    res.statusCode = 403;
    res.end(`POST operation not supported on /promos/${req.params.promoId}`);
  })
  .put((req, res, next) => {
    PromoModel.findByIdAndUpdate(req.params.promoId, { $set: req.body }, { new: true })
      .then((promo) => {
        res.json(promo);
      }, err => next(err));
  })
  .delete((req, res, next) => {
    PromoModel.findByIdAndRemove(req.params.promoId)
      .then((resp) => {
        res.json(resp);
      });
  });

module.exports = router;
