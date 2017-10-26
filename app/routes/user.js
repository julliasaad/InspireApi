const controller = require('../controller/user');

module.exports = function(app) {
  app.post('/api/user', function(req, res) {
    controller.saveUser(req, res);
  });
  app.get('/api/user', function(req, res) {
    controller.listUsers(req, res);
  });
  app.delete('/api/user', function(req, res) {
    controller.removeUser(req, res);
  });
  // app.get('/api/user/:id', function(req, res) {
  //   controller.getUser(req, res);
  // });
};
