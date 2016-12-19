var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  fullName: { type: String, required: true },
  title: String,
  phone: String,
  email: String,
  specialty: String,
});

var ProviderModel = mongoose.model('Provider', schema);

// make this available to our other files
module.exports = ProviderModel;
