const course = require("../models/course")

const CourseController = {
  listCourses(req, res) {
    course.find().exec()
      .then(function(courses) {
          res.json(courses);
        },
        function(erro) {
          console.error(erro);
          res.status(500).json(erro);
        });
  },
  getCourse(req, res) {
    var _id = req.params.id;
    course.findById(_id).exec()
      .then(
        function(course) {
          if (!course) throw new Error("Curso não encontrado!");
          res.json(course)
        },
        function(erro) {
          console.log(erro);
          res.status(404).json(erro);
        }
      );
  },
  removeCourse(req, res) {
    var _id = req.params.id;
    course.remove({
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
  saveCourse(req, res) {
    /*Update*/
    var _id = req.body._id;
    if (_id) {
      course.findByIdAndUpdate(_id, req.body).exec()
        .then(
          function(course) {
            res.json(course);
          },
          function(erro) {
            console.error(erro);
            res.status(500).json(erro);
          }
        );
    } else {
      course.create(req.body)
        .then(
          function(course) {
            res.status(201).json(course);
          },
          function(erro) {
            console.log(erro);
            res.status(500).json(erro);
          }
        );
    }
  }
}
module.exports = CourseController;
