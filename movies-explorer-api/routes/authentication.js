const router = require('express').Router();
const { registration, login } = require('../controllers/users');
const { validatorLogin, validatorRegistration } = require('../middlewares/validation');

router.post('/signup', validatorRegistration, registration);

router.post('/signin', validatorLogin, login);

module.exports = router;
