const router = require('express').Router();
const { registration, login, logout } = require('../controllers/users');
const { validatorLogin, validatorRegistration } = require('../middlewares/validation');

router.post('/signup', validatorRegistration, registration);

router.post('/signin', validatorLogin, login);

router.post('/signout', logout);

module.exports = router;
