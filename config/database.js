var mongoose = require('mongoose');

module.exports = function(uri) {

  mongoose.connect(uri, {
    useMongoClient: true
  });

  mongoose.connection.on('connected', function() {
    console.log('Mongoose! Conectado em' + uri);
  });

  mongoose.connection.on('disconnected', function() {
    console.log('Mongoose! Desconectado de' + uri);
  });

  mongoose.connection.on('disconnected', function(erro) {
    console.log('Mongoose! Desconectado de' + erro);
  });

  process.on('SIGNIT', function() {
    mongoose.connection.close(function() {
      console.log('Mongoose! Desconectado pelo término da aplicação');
      process.exit(0);
    });
  });
}
