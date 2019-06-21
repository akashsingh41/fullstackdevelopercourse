'use strict';
module.exports = function(app) {
  var weights = require('../controllers/weightController');
  app.route('/getweights').get(weights.getweights);
};
