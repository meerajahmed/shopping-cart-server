const {Book} = require('../models/book');

const {mongoose} = require('../db/mongoose');

const books = [
  new Book({
    imagePath: '//localhost:3000/images/6.jpg',
    title: 'The Theory of Everything',
    subtitle: 'The Origin and Fate of the Universe',
    author: 'Stephen Hawking',
    price: 15.36,
    rating: 4.13,
    category: 'science',
    description: 'Stephen Hawking is widely believed to be one of the worlds greatest minds: a brilliant theoretical physicist whose work helped to reconfigure models of the universe and to redefine whats in it. It would be like hearing Christopher Columbus on the New World.'
  }),
  new Book({
    imagePath: '//localhost:3000/images/1.jpg',
    title: 'Wonders of Life',
    subtitle: 'Most Extraordinary Force in the Universe',
    author: 'Brian Cox',
    price: 48.55,
    rating: 4.43,
    category: 'science',
    description: 'In Wonders of Life Exploring the Most Extraordinary Force in the Universe, the definitive companion to the Discovery Science Channel series, Professor Brian Cox takes us on an incredible journey to discover the most complex, diverse, and unique force in the universe: life itself.'
  }),
  new Book({
    imagePath: '//localhost:3000/images/4.jpg',
    title: 'Sherlock',
    subtitle: 'The Return of Sherlock Holmes',
    author: 'Sir Arthur Conan Doyle',
    price: 11.38,
    rating: 4.3,
    category: 'fiction',
    description: 'The hit BBC series Sherlock has introduced a new generation to Sir Arthur Conan Doyle\'s legendary detective. This edition of the classic collection of stories, with an introduction by Sherlock creator Mark Gatiss, allows fans to discover the power of those original adventures.'
  }),
  new Book({
    imagePath: '//localhost:3000/images/2.jpg',
    title: 'Butterfly',
    subtitle: 'From Refugee to Olympian',
    author: 'Hans Zimmer',
    price: 21.09,
    rating: 4.43,
    category: 'biography',
    description: 'Yusra Mardini fled her native Syria to the Turkish coast in 2015 and boarded a small dinghy full of refugees bound for Greece. When the small and overcrowded boat\'s engine cut out, it began to sink. Yusra, her sister and two others took to the water, pushing the boat for three and a half hours in open water until they eventually landed on Lesbos, saving the lives of the passengers aboard.'
  }),
  new Book({
    imagePath: '//localhost:3000/images/5.jpg',
    title: 'More Mindfulness Colouring',
    subtitle: 'Anti-stress art therapy for busy people',
    author: 'Emma Farrarons',
    price: 19.9,
    rating: 6.36,
    category: 'health',
    description: 'Mindfulness is the easy way to gently let go of stress and be in the moment. It has fast become the slow way to manage the modern world - without chanting mantras or setting aside hours of time for meditation. 10 minutes a day to less stress, more peace.'
  }),
  new Book({
    imagePath: '//localhost:3000/images/3.jpg',
    title: 'How Not To Die',
    subtitle: 'Prevent and reverse disease',
    author: 'Michael Greger',
    price: 11.85,
    rating: 4.53,
    category: 'health',
    description: 'How Not To Die gives effective, scientifically-proven nutritional advice to prevent our biggest killers - including heart disease, breast cancer, prostate cancer, high blood pressure and diabetes - and reveals the astounding health benefits that simple dietary choices can provide.'
  })
];

let done = 0;
for (let i = 0; i < books.length; i++) {
  books[i].save(function (err, result) {
    done++;
    if (done === books.length) {
      exit();
    }
  });
}

function exit() {
  mongoose.disconnect();
}