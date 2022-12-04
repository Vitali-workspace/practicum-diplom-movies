# Описание проекта
Бэкенд код приложения для поиска фильмов. С регистрацией и возможностью сохранять, удалять фильмы из избранного.

## Ссылка на приложение
Адрес для бэкенда:  https://api.diplom.vitali.nomoredomains.club

### Ссылка на макет
https://drive.google.com/file/d/19_bHbG637SyOMvvi04h6hP7EhsCUT4me/view?usp=share_link

## Ссылка на api
https://github.com/Vitali-workspace/movies-explorer-api

## Ссылка на frontend
https://github.com/Vitali-workspace/movies-explorer-frontend


## В проекте использовались:
- Node.js
- mongoose
- express.js
- mongoDB
- celebrate
- Яндекс.Облако

-----

## Примеры шаблонов запросов для Postman

### Создание фильма (post): http://localhost:3000/movies
<code>
{"country": "USA",
"director": "Funken",
"duration": "114",
"year": "1988",
"description": "Funken film",
"image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"trailerLink": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"thumbnail": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSD1MwNbuUDdA7NuM-Es_1tE0VM6-lA5jrPiZuhXFJ-A&s",
"movieId": "185759318403756309353299",
"nameRU": "Ханкен",
"nameEN": "Hanken"}
</code>

### Изменение данных пользователя (patch): http://localhost:3000/users/me
<code>{"name":"Rename", "email": "testemail@gmail.com"}</code>

### Удаление фильма созданного пользователем (delete):
http://localhost:3000/movies/185759318403756309353299

### Выход из аккаунта (post):
http://localhost:3000/signout

### Вход в приложение (post): http://localhost:3000/signin
<code>{"email": "testemail@gmail.com", "password": "pass343456"}</code>

### Регистрация нового пользователя (post): http://localhost:3000/signup
<code>{"name":"Newname", "email": "newemail@gmail.com", "password": "pass343456"}</code>
