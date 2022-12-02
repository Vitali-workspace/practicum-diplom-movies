const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const User = require('../models/user');
const PageNotFoundError = require('../errors/PageNotFoundError');
const ConflictError = require('../errors/ConflictError');
const BadRequestError = require('../errors/BadRequestError');

const { NODE_ENV, JWT_SECRET } = process.env;


module.exports.getUserInfo = (req, res, next) => {
  const { _id } = req.user;
  User.find({ _id })
    .then((myUser) => {
      if (!myUser) {
        next(new PageNotFoundError('Запрошенный пользователь не найден'));
      }
      return res.send(...myUser);
    })
    .catch(next);
};


module.exports.updateUserInfo = (req, res, next) => {
  const { name, email } = req.body;
  const owner = req.user._id;

  User.findByIdAndUpdate(owner, { name, email }, { new: true, runValidators: true })
    .then((newUser) => res.send(newUser))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Такой email уже существует'));
        return;
      }

      if (err.name === 'ValidationError') {
        next(new BadRequestError('Ошибка в запросе'));
      } else {
        next(err);
      }
    });
};


module.exports.registration = (req, res, next) => {
  const { name, email, password } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({ name, email, password: hash })
        .then((newUser) => {
          const { _id } = newUser;
          res.send({ name, email, _id });
        })
        .catch((err) => {
          if (err.code === 11000) {
            next(new ConflictError('Такой email уже существует'));
            return;
          }

          if (err.name === 'ValidationError') {
            next(new BadRequestError('Ошибка в запросе'));
          } else {
            next(err);
          }
        });
    })
    .catch(next);
};


module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  const devTokenSecret = 'dev-secret-key';
  const checkJWT = NODE_ENV === 'production' ? JWT_SECRET : devTokenSecret;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, checkJWT, { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(next);
};
