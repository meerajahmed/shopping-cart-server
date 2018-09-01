const mongoose = require('mongoose');
const _ = require('lodash');

const CartSchema = new mongoose.Schema({
  uid: {
    type: mongoose.Schema.Types.ObjectId,
    require: true
  },
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Cart = mongoose.model('Cart', CartSchema);

module.exports = {Cart};