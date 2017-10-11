const controller = require('../controller/login');

module.exports = function(app) {
    app.post('/api/login', function(req, res) {
        controller.logar(req, res);
    });  
};  