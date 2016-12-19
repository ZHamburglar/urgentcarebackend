var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  studentName: { type: String, required: true },
  studentDob: { type: String, required: true },
  studentGender: { type: String, required: true },
  studentAllergies: String,
  studentSymptoms: { type: String, required: true }
});

var MessageModel = mongoose.model('Message', schema);

// make this available to our other files
module.exports = MessageModel;
