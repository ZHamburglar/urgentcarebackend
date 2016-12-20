
var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var RequestInfo = new Schema({
  facultyId: String, 
  studentName: { type: String, required: true },
  studentDob: { type: String, required: true },
  studentGender: { type: String, required: true },
  allergies: String,
  symptoms: { type: String, required: true },
  contact: String
  // timestamps: true
});

var PatientRequest = mongoose.model('PatientRequest', RequestInfo);

module.exports = PatientRequest;
