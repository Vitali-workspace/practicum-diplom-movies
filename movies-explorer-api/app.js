const express = require('express');
const mongoose = require('mongoose');

const { PORT = 3000 } = process.env;

const app = express();

mongoose.connect('')

app.listen(PORT, () => {
  console.log('App работает')
});