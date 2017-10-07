const controller = require('../controller/inspired');
module.exports = function(app) {
    
    app.post('/api/inspired', function(req, res) {
        controller.saveInspired(req, res);
    });
    app.get('/api/inspired', function(req, res) {
        controller.listInspireds(req, res);
    });
    app.delete('/api/inspired', function(req, res) {
        controller.removeInspired(req, res);
    });    
};  