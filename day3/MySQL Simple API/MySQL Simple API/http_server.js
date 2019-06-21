//requirements
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 8000;
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//
const router = express.Router();
var routes = require('./routes/weightRoutes'); //importing route
routes(app); //register the route
//
app.use('/', router);
app.listen(port);
console.log('Listening on ' + port);
//

