const router = require('express').Router();
const { getUserInfo, updateUserInfo } = require('../controllers/users');
const { validatorUpdateUser } = require('../middlewares/validation');

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', getUserInfo);

// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', validatorUpdateUser, updateUserInfo);

module.exports = router;
