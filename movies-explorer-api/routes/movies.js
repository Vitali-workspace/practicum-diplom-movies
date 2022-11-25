const router = require('express').Router();

//! импорт контроллеров

// возвращает все сохранённые текущим  пользователем фильмы
router.get('/movies', null);

// создаёт фильм с переданными в теле 
// country, director, duration, year, description, image, trailer, nameRU, nameEN и thumbnail, movieId
router.post('/movies', null);

// удаляет сохранённый фильм по id
router.delete('/movies/_id', null);

module.exports = router;
