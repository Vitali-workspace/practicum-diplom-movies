const { celebrate, Joi } = require('celebrate');
const { regUrl } = require('../utils/constants');


module.exports.validatorCreateMovie = celebrate({
  body: Joi.object().keys({
    country: Joi.string().required(),
    director: Joi.string().required(),
    duration: Joi.number().required(),
    year: Joi.string().required(),
    description: Joi.string().required(),
    image: Joi.string().pattern(regUrl).required(),
    trailerLink: Joi.string().pattern(regUrl).required(),
    thumbnail: Joi.string().pattern(regUrl).required(),
    movieId: Joi.number().integer().required(),
    nameRU: Joi.string().required(),
    nameEN: Joi.string().required(),
  }),
});

module.exports.validatorLogin = celebrate({
  body: Joi.object().keys({
    email: Joi.string().invalid(null, '').required().email(),
    password: Joi.string().invalid(null, '').required(),
  }),
});

module.exports.validatorRegistration = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().invalid(null, '').required().email(),
    password: Joi.string().invalid(null, '').required(),
  }),
});

module.exports.validatorDeleteMovie = celebrate({
  body: Joi.object().keys({
    params: Joi.object().keys(
      { _id: Joi.string().length(24).hex().required() },
    ),
  }),
});

module.exports.validatorUpdateUser = celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30).required(),
    email: Joi.string().invalid(null, '').email().required(),
  }),
});
