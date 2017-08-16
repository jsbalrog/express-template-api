/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /users              ->  index
 * POST    /users              ->  create
 * GET     /users/:id          ->  show
 * PUT     /users/:id          ->  update
 * DELETE  /users/:id          ->  destroy
 */

'use strict';

var User = require('./user.model').User;
var _ = require('lodash');

function handleError(res, err) {
  return res.send(500, err);
}

// Get list of users
exports.index = function(req, res) {
  User.find({}, function(err, users) {
    if(err) { return handleError(res, err); }
    return res.json(200, users);
  });
};

// Create a new user
exports.create = function(req, res) {
  var u = new User({
    name: 'Ted Jenkins',
    password: 'password',
    admin: true
  });

  // Save the sample user
  u.save(function(err) {
    if(err) return handleError(res, err);
  });
  console.log('User saved successfully');
  return res.json(201, u);
};
