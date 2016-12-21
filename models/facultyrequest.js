var mongoose = require('mongoose');
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var schema = new mongoose.Schema({
  request: {
    type: ObjectId,
    required: true,
    ref: 'PatientRequest', //references "PatientRequest" model
    index: true
  },
  faculty: {
    type: ObjectId,
    required: true,
    ref: 'FacultyModel',
    index: true
  },
  created: Date
});

var model = mongoose.model('FacultyRequest', schema);

// make this available to our other files
module.exports = model;
