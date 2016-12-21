var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var ProviderInfo = new mongoose.Schema({
  providerId: String,
  fullName: { type: String, required: true },
  title: String,
  phone: String,
  email: String,
  specialty: String,
  providerId: String
});

var ProviderModel = mongoose.model('Provider', ProviderInfo);

// make this available to our other files
module.exports = ProviderModel;
