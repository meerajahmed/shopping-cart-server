const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  imagePath: {
    type: String,
    require: true
  },
  title: {
    type: String,
    require: true
  },
  subtitle: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  rating: {
    type: Number,
    require: true
  },
  author: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  }
});

const Product = mongoose.model('Product', UserSchema);

module.exports = {Product};