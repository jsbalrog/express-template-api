/**
 * Main application file
 */

'use strict';

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');

// Setup server
var app = express();
var server = require('http').createServer(app);

// Set port
app.set('port', process.env.PORT || 3000);
// Routing
require('./server/routes')(app);

// Start server
server.listen(app.get('port'), function () {
  console.log('Express server listening on %d, in %s mode', app.get('port'), app.get('env'));
});

// Expose app
exports = module.exports = app;
