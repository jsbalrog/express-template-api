'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const userSchema = new Schema({
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true, trim: true },
  admin: { type: Boolean, required: true },
});

const user = mongoose.model('user', userSchema); // This means it's in a Mongodb collection called "users"

module.exports = {
  User: user,
};
