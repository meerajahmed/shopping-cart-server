var {Product} = require('../models/product');

var {mongoose} = require('../db/mongoose');

var products = [
  new Product({
    imagePath: '//localhost:3000/images/6.jpg',
    title: 'The Theory of Everything',
    subtitle: 'Exploring the Most Extraordinary Force in the Universe',
    author: 'Stephen Hawking',
    price: 15.36,
    rating: 4.13,
    genre: 'science',
    description: 'Stephen Hawking is widely believed to be one of the worlds greatest minds: a brilliant theoretical physicist whose work helped to reconfigure models of the universe and to redefine whats in it. Imagine sitting in a room listening to Hawking discuss these achievements and place them in historical context. It would be like hearing Christopher Columbus on the New World.Hawking presents a series of seven lec-turescovering everything from big bang to black holes to string theorythat capture not only the brilliance of Hawkings mind but his characteristic wit as well.'
  }),
  new Product({
    imagePath: '//localhost:3000/images/1.jpg',
    title: 'Wonders of Life',
    subtitle: 'Exploring the Most Extraordinary Force in the Universe',
    author: 'Brian Cox',
    price: 48.55,
    rating: 4.43,
    genre: 'science',
    description: 'In Wonders of Life Exploring the Most Extraordinary Force in the Universe, the definitive companion to the Discovery Science Channel series, Professor Brian Cox takes us on an incredible journey to discover the most complex, diverse, and unique force in the universe: life itself.'
  }),
  new Product({
    imagePath: '//localhost:3000/images/4.jpg',
    title: 'Sherlock',
    subtitle: 'The Return of Sherlock Holmes',
    author: 'Sir Arthur Conan Doyle',
    price: 11.38,
    rating: 4.3,
    genre: 'fiction',
    description: 'The hit BBC series Sherlock has introduced a new generation to Sir Arthur Conan Doyle\'s legendary detective. This edition of the classic collection of stories, with an introduction by Sherlock creator Mark Gatiss, allows fans to discover the power of those original adventures'
  }),
  new Product({
    imagePath: '//localhost:3000/images/2.jpg',
    title: 'Pirates Of The Caribbean',
    subtitle: 'Dead Man\'s Chest (Easy Piano)',
    author: 'Hans Zimmer',
    price: 16.93,
    rating: 4.05,
    genre: 'fiction',
    description: 'Easy Piano Songbook). Easy solo arrangements of 8 songs from this swashbuckling Disney blockbuster: Jack Sparrow * The Kraken * Davy Jones * I\'ve Got My Eye on You * Dinner Is Served * Two Hornpipes * Wheel of Fortune * Davy Jones Plays His Organ.'
  }),
  new Product({
    imagePath: '//localhost:3000/images/5.jpg',
    title: 'The Little Book of Mindfulness',
    subtitle: '10 minutes a day to less stress, more peace',
    author: 'Dr. Patrizia Collard',
    price: 6.8,
    rating: 6.36,
    genre: 'health',
    description: 'Mindfulness is the easy way to gently let go of stress and be in the moment. It has fast become the slow way to manage the modern world - without chanting mantras or setting aside hours of time for meditation.'
  }),
  new Product({
    imagePath: '//localhost:3000/images/3.jpg',
    title: 'How Not To Die',
    subtitle: 'Discover the foods scientifically proven to prevent and reverse disease',
    author: 'Michael Greger',
    price: 11.85,
    rating: 4.53,
    genre: 'health',
    description: 'How Not To Die gives effective, scientifically-proven nutritional advice to prevent our biggest killers - including heart disease, breast cancer, prostate cancer, high blood pressure and diabetes - and reveals the astounding health benefits that simple dietary choices can provide.'
  })
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}