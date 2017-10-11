var http = require('http');
var app = require('./config/express')();
require('./config/database.js')('mongodb://inspire:admin123@ds113785.mlab.com:13785/inspireapi')
http.createServer(app).listen(app.get('port'), function() {
  console.log('Express Server escutando na porta ' +
    app.get('port'));
});
