const controller = require('../controller/course');

module.exports = function(app) {
    app.post('/api/course', function(req, res) {
        controller.saveCourse(req, res);
    });
    app.get('/api/course', function(req, res) {
        controller.listCourses(req, res);
    });
    app.delete('/api/course', function(req, res) {
        controller.removeCourse(req, res);
    });
};
