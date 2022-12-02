const router = require('express').Router();
const { getUserMovies, createMovie, removeMovie } = require('../controllers/movies');
const { validatorCreateMovie, validatorDeleteMovie } = require('../middlewares/validation');

// возвращает все сохранённые текущим пользователем фильмы
router.get('/movies', getUserMovies);

// создаёт фильм с переданными в теле данными
router.post('/movies', validatorCreateMovie, createMovie);

// удаляет сохранённый фильм по id
router.delete('/movies/:_id', validatorDeleteMovie, removeMovie);

module.exports = router;
