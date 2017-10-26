const user = require("../models/user")

const UserController = {
  listUsers(req, res) {
    user.find().exec()
      .then(function(users) {
          res.json(users);
        },
        function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
  },
  getUser(req, res) {
    var _id = req.params.id;
    user.findById(_id).exec()
      .then(
        function(user) {
          if (!user) throw new Error("Usuária não encontrada!");
          res.json(user)
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
  },
  removeUser(req, res) {
    var _id = req.params.id;
    user.remove({
        "_id": _id
      }).exec()
      .then(
        function() {
          res.end();
        },
        function(erro) {
          return console.erro(erro);
        }
      );
  },
  saveUser(req, res) {
    /*Update*/
    var _id = req.body._id;
    if (_id) {
      console.log("tenho id");
      user.findByIdAndUpdate(_id, req.body).exec()
        .then(
          function(user) {
            res.json(user);
          },
          function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
    } else {
      user.create(req.body)
        .then(
          function(user) {
            res.status(201).json(user);
          },
          function(erro) {
            console.log(erro);
            res.status(500).json(erro);
          }
        );
    }
  }
}
module.exports = UserController;
