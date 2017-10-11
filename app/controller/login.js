// import jwt from "jwt-simple";
const user = require("../models/user");

const LoginController = {
  logar(req, res) {
    var username = req.body.username;
    var password = req.body.password;
    user.findOne({
      'username': username,
      'password': password
    }, 'username password', function(err, user) {
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
