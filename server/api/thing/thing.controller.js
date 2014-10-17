/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

function handleError(res, err) {
  return res.send(500, err);
}

// Get list of things
exports.index = function(req, res) {
  return res.json(200, { "thing1": "candy", "thing2": "hotdogs" });
};