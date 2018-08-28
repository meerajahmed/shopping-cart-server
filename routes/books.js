var express = require('express');
var router = express.Router();
var {Product} = require('../models/product');

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', {title: 'Express'});
  Product.find({})
    .then((products) => {
      res.send(products);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

module.exports = router;
