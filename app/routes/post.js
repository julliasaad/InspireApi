const controller = require('../controller/post');

module.exports = function(app) {
  app.post('/api/post', function(req, res) {
    controller.savePost(req, res);
  });
  app.get('/api/post', function(req, res) {
    controller.listPosts(req, res);
  });
  app.delete('/api/post', function(req, res) {
    controller.removePost(req, res);
  });
};
