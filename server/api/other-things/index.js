/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /other-things              ->  index
 * POST    /other-things              ->  create
 * GET     /other-things/:id          ->  show
 * PUT     /other-things/:id          ->  update
 * DELETE  /other-things/:id          ->  destroy
 */

'use strict';

var express = require('express');
var controller = require('./other-things.controller');

var router = express.Router();

router.get('/', controller.index);

module.exports = router;
