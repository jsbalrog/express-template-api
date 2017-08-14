/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /other-things              ->  index
 * POST    /other-things              ->  create
 * GET     /other-things/:id          ->  show
 * PUT     /other-things/:id          ->  update
 * DELETE  /other-things/:id          ->  destroy
 */

'use strict';

// Get list of things
exports.index = function(req, res) {
  return res.json(200, { "thing3": "cranberry sauce", "thing4": "jujyfruits" });
};