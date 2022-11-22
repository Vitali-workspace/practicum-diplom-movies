const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    maxlength: 30,
    minlength: 2,
  },
});

module.exports = mongoose.model('user', userSchema);