var express = require('express');
var router = express.Router();
var {Book} = require('../models/book');

/* GET home page. */
router.get('/', function (req, res) {
  Book.find({})
    .then((books) => {
      res.send(books);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

module.exports = router;
