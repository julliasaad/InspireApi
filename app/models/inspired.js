var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const inspired = new Schema({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    }
});

module.exports = mongoose.model('Inspired', inspired);
