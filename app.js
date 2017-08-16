/**
 * Main application file
 */

'use strict';

var express = require('express'),
    bodyParser = require('body-parser'),
    Mongoose = require('mongoose'),
    morgan = require('morgan'),
    User = require('./server/api/user/user.model').User;

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Setup server
var app = express();
var server = require('http').createServer(app);

// Set port
app.set('port', process.env.PORT || 3000);

app.set('appPath', 'client');

app.set('appSecret', 'fritzlives');

// To be able to access POST data and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Use morgan to log requests to the console
app.use(morgan('dev'));

// Static directory
app.use(express.static(__dirname + '/client/public'));

// Routing
require('./server/routes')(app);

// Start server
server.listen(app.get('port'), function () {
  // Mongoose connection
  Mongoose.connect('mongodb://localhost/express', {
    useMongoClient: true,
  });

  console.log('Express server listening on %d, in %s mode', app.get('port'), app.get('env'));
});

// Expose app
exports = module.exports = app;
