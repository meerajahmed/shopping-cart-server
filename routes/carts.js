const express = require('express');
const router = express.Router();
const {Cart} = require('../models/cart');
const {ObjectID} = require('mongodb');
const {authenticate} = require('../middleware/authenticate');

router.get('/', authenticate, (req, res) => {
  Cart.find({
    uid: req.user._id
  }).then((carts) => {
    res.send(carts);
  }, (e) => {
    res.status(400).send(e);
  });
});

router.post('/', authenticate, function (req, res) {
  const cart = new Cart({
    uid: req.user._id,
    bookId: new ObjectID(req.body.bookId),
    quantity: req.body.quantity
  });

  cart.save().then((cart) => {
    res.send(cart);
  }, (e) => {
    res.status(400).send(e);
  });

});

router.put('/:id', authenticate, (req, res) => {
  const _id = req.params.id;
  const quantity = req.body.quantity;
  Cart.findOneAndUpdate({_id, uid: req.user._id}, {$set: {quantity}}, {new: true})
    .then((cart) => {
      if (!cart) {
        return res.status(404).send();
      }
      res.send(cart);
    }).catch((e) => {
    res.status(400).send();
  })
});

router.delete('/:id', authenticate, (req, res) => {
  const _id = req.params.id;

  Cart.findOneAndRemove({
    _id,
    uid: req.user._id
  }).then((cart) => {
    if (!cart) {
      return res.status(404).send();
    }
    res.send(cart);
  }).catch((e) => {
    res.status(400).send();
  });
});


module.exports = router;
