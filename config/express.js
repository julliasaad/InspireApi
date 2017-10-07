const express = require('express');
const bodyParser = require('body-parser');
const consign = require('consign');
const load = require('express-load');
const port = process.env.PORT || 3000;
const path = require('path');
const router = express.Router();

module.exports = function() {

  

  const app = express();
  app.use('/api', router.get('/', (req, res) => {
          res.send('api works');
      })
  );

  app.set('port', port);
  app.use(bodyParser.json());
  app.use(require('method-override')());
  app.use(express.static(path.join(__dirname, '/../../dist')));
  app.use(bodyParser.urlencoded({ extended: true }));
  
  consign()
      .include('server/app/models')
      .then('server/app/controller')
      .then('server/app/routes')
      .into(app);

  return app;
};