var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const course = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Course', course);
