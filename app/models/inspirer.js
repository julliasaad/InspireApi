var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const inspirer = new Schema({
    nome:{
        type: String,
        required:true
    },
    user_name:{
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


module.exports = mongoose.model('Inspirer', inspirer);;
