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
}
