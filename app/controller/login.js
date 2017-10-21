// import jwt from "jwt-simple";
const user = require("../models/user");

const LoginController = {
  logar(req, res) {
    var email = req.body.email;
    var password = req.body.password;
    user.findOne({
      'email': email,
      'password': password
    }, 'email password', function(err, user) {
      if (err) {
        res.send(false);
      }
      if (user) {
        res.send(true);
      } else {
        res.send(false);
      }
    });
  }
}
module.exports = LoginController;
