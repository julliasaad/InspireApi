const controller = require('../controller/inspirer');
module.exports = function(app) {
    
    app.post('/api/inspirer', function(req, res) {
        controller.saveInspirer(req, res);
    });
    app.get('/api/inspirer', function(req, res) {
        controller.listInspirers(req, res);
    });
    app.delete('/api/inspirer', function(req, res) {
        controller.removeInspirer(req, res);
    });    
};  