'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

const thingSchema = new Schema({
  name: { type: String, required: true, trim: true },
  info: { type: String, required: true, trim: true },
  active: { type: String, required: true, trim: true },
});

const thing = mongoose.model('thing', thingSchema); // This means it's in a Mongodb collection called "things"

module.exports = {
  Thing: thing,
};
