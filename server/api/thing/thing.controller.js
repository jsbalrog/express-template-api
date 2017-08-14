/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var Thing = require('./thing.model').Thing;
var _ = require('lodash');

function handleError(res, err) {
  return res.send(500, err);
}

// Get list of things
exports.index = function(req, res) {
  Thing.find({}, function(err, things) {
    if(err) { return handleError(res, err); }
    return res.json(200, things);
  });
};

// Get a single thing
exports.show = function(req, res) {
  Thing.findById(req.params.id, function(err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { res.send(404); }
    return res.json(thing);
  });
};

// Create a new thing
exports.create = function(req, res) {
  Thing.create(req.body, function(err, thing) {
    if(err) { return handleError(res, err); }
    return res.json(201, thing);
  });
};

// Update an existing thing
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Thing.findById(req.params.id, function(err, thing) {
    if(err) { return handleError(res, err) ; }
    if(!thing) { return res.send(404); }
    var updated = _.merge(thing, req.body);
    updated.save(function(err) {
      if(err) { return handleError(res, err); }
      return res.json(200, thing);
    });
  });
};

// Delete an existing thing
exports.destroy = function(req, res) {
  Thing.findById(req, params.id, function(err, thing) {
    if(err) { return handleError(res, err); }
    if(!thing) { return res.send(404); }
    thing.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};
