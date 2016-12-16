var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  fullName: { type: String, required: true },
  phone: String,
  email: String,
  schoolName: String,
  schoolPhone: String,
});

var model = mongoose.model('Faculty', schema);

// make this available to our other files
module.exports = model;
