/**
 * Main application routes
 */

'use strict';

module.exports = function(app) {

  // Insert routes below
  app.use('/api/things', require('../api/thing'));
  app.use('/api/other-things', require('../api/other-thing'));
  app.use('/api/users', require('../api/user'));

  // All other routes should redirect to the index.html
  app.route('/*')
    .get(function(req, res) {
      res.sendfile(app.get('appPath') + '/public/index.html');
    });
};
