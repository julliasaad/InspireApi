var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const user = new Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  password: {
    type: String,
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
