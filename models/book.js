const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
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
  category: {
    type: String,
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

const Book = mongoose.model('Book', BookSchema);

module.exports = {Book};