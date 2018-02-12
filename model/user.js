
//mode/comments.js
'use strict';
//import dependency
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//create new instance of the mongoose.schema. the schema takes an object that shows
//the shape of your database entries.
var User = new Schema({
  first_name: String,
  last_name: String,
  eth_amount: String,
  eth_address: String,
  email: String,
  ref_code: String,
});

//export our module to use in server.js
module.exports = mongoose.model('User', User);
