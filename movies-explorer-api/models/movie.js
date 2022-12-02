const mongoose = require('mongoose');
const isUrl = require('validator/lib/isURL');

const movieSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  director: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
    validate: (url) => isUrl(url),
    message: 'Ошибка в ссылке на постер к фильму',
  },
  trailerLink: {
    type: String,
    required: true,
    validate: (url) => isUrl(url),
    message: 'Ошибка в ссылке на трейлер фильма',
  },
  thumbnail: {
    type: String,
    required: true,
    validate: (url) => isUrl(url),
    message: 'Ошибка в ссылке на мини постер к фильму',
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  movieId: {
    type: Number,
    required: true,
  },
  nameRU: {
    type: String,
    required: true,
  },
  nameEN: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('movie', movieSchema);
