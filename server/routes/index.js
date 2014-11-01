/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('../api/things'));
  app.use('/api/other-things', require('../api/other-things'));

};
