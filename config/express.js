const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const load = require('express-load');
const path = require('path');
const port = process.env.PORT || 3000;
const router = express.Router();

module.exports = function() {

  const app = express();
  app.use('/api', router.get('/', (req, res) => {
    res.send('api works');
  }));

  app.set('port', port);
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(express.static(path.join(__dirname, '/../../dist')));
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  consign()
    .include('app/models')
    .then('app/controller')
    .then('app/routes')
    .into(app);

  return app;
};
