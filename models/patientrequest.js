
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

// Schema defines how chat messages will be stored in MongoDB
var schema = new Schema({
  // participants: [{ type: Schema.Types.ObjectId, ref: 'User' }]
  facultyId: String, // req.user.aud
  studentName: { type: String, required: true },
  studentDob: { type: String, required: true },
  studentGender: { type: String, required: true },
  allergies: String,
  symptoms: { type: String, required: true },
  // author: {type: Schema.Types.ObjectId, ref: 'User'},
  // timestamps: true
});

var PatientRequest = mongoose.model('Message', schema);

module.exports = PatientRequest;
