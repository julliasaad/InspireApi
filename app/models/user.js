var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: String,
  },
  biography: {
    type: String,
  },
  photo: {
    type: String,
  }
});

module.exports = mongoose.model('User', user);
