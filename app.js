/**
 * Main application file
 */

'use strict';

var cookieParser = require('cookie-parser'),
    session = require('express-session'),
    bodyParser = require('body-parser'),
    Mongoose = require('mongoose');

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');

// Setup server
var app = express();
var server = require('http').createServer(app);

// Set port
app.set('port', process.env.PORT || 3000);

app.set('appPath', 'client');

// To handle POST data
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cookie parser for express sessions
app.use(cookieParser());
app.use(session({
  secret: 'my secret',
  saveUninitialized: true,
  resave: true
}));


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
