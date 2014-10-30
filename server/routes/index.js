/**
 * Main application routes
 */

'use strict';

var thingsRouter = require('../api/things'),
    otherThingsRouter = require('../api/other-things');

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', thingsRouter);
  app.use('/api/other-things', otherThingsRouter);

};