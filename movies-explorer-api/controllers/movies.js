const Movie = require('../models/movie');
const PageNotFoundError = require('../errors/PageNotFoundError');
const ForbiddenError = require('../errors/ForbiddenError');
const BadRequestError = require('../errors/BadRequestError');


module.exports.getUserMovies = (req, res, next) => {
  Movie.find({})
    .then((listMovies) => res.send({ listMovies }))
    .catch(next);
};


module.exports.createMovie = (req, res, next) => {
  const owner = req.user._id;

  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;

  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movie) => res.send(movie))
    .catch((err) => {
      if (err.name === 'BadRequestError') {
        next(new BadRequestError('ошибка в запросе'));
      } else {
        next(err);
      }
    });
};


module.exports.removeMovie = (req, res, next) => {
  const owner = req.user._id;
  const id = req.params._id;

  Movie.findById(id)
    .then((movie) => {
      if (!movie) {
        next(new PageNotFoundError('Запрошенный id не найден'));
        return;
      }

      if (owner === movie.owner.toString()) {
        movie.remove();
        return;
      }
      next(new ForbiddenError('Нет прав на удаление фильма'));
    })
    .then((movie) => res.send(movie))
    .catch(next);
};
