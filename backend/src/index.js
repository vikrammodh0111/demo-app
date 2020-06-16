const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const config = require('config');
const path = require('path');

const PortalServe = require('./middleware/portalServe');
const Router = require('./router');

const server = (async () => {
  try {
    const app = express();
    app.use(cors());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(express.static(path.join(__dirname, '../../portal/build/')));
    app.use(PortalServe);
    app.use('/api', Router);
    const port = process.env.PORT || config.get('port')
    app.listen(port);
    console.log(`Server is running on port : ${port}`)
  } catch (err) {
    console.log(err);
  }
})();

module.exports = server;