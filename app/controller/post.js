const post = require("../models/post")

const PostController = {
  listPosts(req, res) {
    post.find().exec()
      .then(function(posts) {
          res.json(posts);
        },
        function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
  },
  getPost(req, res) {
    var _id = req.params.id;
    post.findById(_id).exec()
      .then(
        function(post) {
          if (!post) throw new Error("Post não encontrado!");
          res.json(post)
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
  },
  removePost(req, res) {
    var _id = req.params.id;
    post.remove({
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
  savePost(req, res) {
    /*Update*/
    var _id = req.body._id;
    if (_id) {
      post.findByIdAndUpdate(_id, req.body).exec()
        .then(
          function(post) {
            res.json(post);
          },
          function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
    } else {
      post.create(req.body)
        .then(
          function(post) {
            res.status(201).json(post);
          },
          function(erro) {
            console.log(erro);
            res.status(500).json(erro);
          }
        );
    }
  }
}
module.exports = PostController;
