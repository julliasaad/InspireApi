// import jwt from "jwt-simple";
const user = require("../models/user");

const LoginController = {
    logar(req, res) {
        var username = req.body.username;
        var password = req.body.password;
        user.findOne({ 'username': username, 'password': password }, 'username password', function(err, user) { 
            if(err) {
                res.send(false);
            }
            if(user) {
                res.send(true);
            } else {
                res.send(false);
            }
        });
    }
}
module.exports = LoginController;

// var Person = mongoose.model('Person', yourSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
// Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
//  if (err) return handleError(err);
//  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation) // Space Ghost is a talk show host.
// })