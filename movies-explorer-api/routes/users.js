const router = require('express').Router();

//! импорт контроллеров

// возвращает информацию о пользователе (email и имя)
router.get('/users/me', null);

// обновляет информацию о пользователе (email и имя)
router.patch('/users/me', null);

module.exports = router;
