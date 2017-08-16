'use strict';

var User = require('../user/user.model').User,
    jwt = require('jsonwebtoken');

// Create a new thing
exports.authenticate = function(req, res) {
  User.findOne({
    name: req.body.name,
  }, function(err, user) {
    if(err) throw err;

    if(!user) {
      res.json({ success: false, message: 'Authentication failed. User not found.' });
    } else if(user) {
      // Check if password matches
      if(user.password != req.body.password) {
        res.json({ success: false, message: 'Authentication failed. Incorrect password.' })
      } else {
        // If user is found and password is legit, create a token
        var token = jwt.sign(user, app.get('appSecret'), {
          expiresInMinutes: 1440 // 24 hours
        });

        // Return the info including the token as JSON
        res.json({
          success: true,
          message: 'Enjoy your token!',
          token: token,
        });
      }
    }
  });
};
