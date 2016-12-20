var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var FacultyInfo = new mongoose.Schema({
  type: ObjectId,
  fullName: String,
  phone: String,
  email: String,
  schoolName: String,
  schoolPhone: String
});


var FacultyModel = mongoose.model('Faculty', FacultyInfo);

// make this available to our other files
module.exports = FacultyModel;
