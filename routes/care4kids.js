var express = require('express');
var router = express.Router();
var ProviderModel = require('../models/providers.js');
var FacultyModel = require('../models/faculties.js');
var PatientRequest = require('../models/patientrequest.js');

//Doctor GET
router.get('/doctors',function(req,res,next){
  ProviderModel.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

//Doctor Signup POST -- working
router.post('/doctors',function(req,res,next){

  var postDocInfo = {
    providerId: req.user.aud,
    fullName: req.body.fullName,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    specialty: req.body.specialty
  };

var newPost = new ProviderModel(postDocInfo);

newPost.save(function(err,success){
  res.send("Doc Posted!");
  //console.log(postDocInfo);
  console.log("error",err);
  });
});

//Doctor PUT (Update) -- NOT WORKING
router.put('/doctors',function(req,res,next){
  var providerId = req.body.id;
  var updateInfo = {
    fullName: req.body.fullName,
    title: req.body.title,
    phone: req.body.phone,
    email: req.body.email,
    specialty: req.body.specialty
  };

  ProviderModel.findByIdAndUpdate(providerId, updateInfo, function(err,post){
    if(err) console.log(err);

    res.send('SUCCESS!');
  });
});

//Faculty GET
router.get('/faculty',function(req,res,next){
  FacultyModel.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

//Faculty Signup POST -- working
router.post('/faculty',function(req,res,next){

  var postFacultyInfo = {
    facultyId: req.user.aud,
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schooName,
    schoolPhone: req.body.schoolPhone
  };

var newPost = new FacultyModel(postFacultyInfo);

newPost.save(function(err,success){
  console.log("error",err);
  res.send("POSTED!");
  });
});

//Faculty Update (PUT) - NOT WORKING
router.put('/faculty/',function(req,res,next){
  var facultyId = req.user.aud;
  var updateInfo = {
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schooName,
    schoolPhone: req.body.schoolPhone
  };

  FacultyModel.findByIdAndUpdate(facultyId, updateInfo,function(err,post){
    if(err) console.log(err);

    res.send('UPDATED THAT SH*T!');
  });
});

// GET a faculty member -- working
router.get('/faculty/:facultyId', function(req, res){
  FacultyModel.find({ facultyId: req.user.aud }, function(err, faculty){
    if (err) console.log(err);

    res.json(faculty);
    console.log(faculty);
  });
});

//GET a patient request
router.get('/patientrequest',function(req,res,next){
  PatientRequest.find({},'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

// // POST a patient request by Faculty Id
// router.post('/patientrequest', function(req, res) {
//   var facultyId = req.user.aud;
//   var studentName = req.body.studentName,
//       studentDob = req.body.studentDob,
//       studentGender = req.body.studentGender,
//       allergies = req.body.allergies,
//       symptoms = req.body.symptoms;
//
//       //body because it's coming from a form
//
//   // if (!symptoms) {
//   //   res.status(400).send('Missing title'); // sending back a response code if title is not provided
//   // }
//
//   var newRequest = new PatientRequest({
//     facultyId: facultyId,
//     studentName: studentName,
//     studentDob: studentDob,
//     studentGender: studentGender,
//     allergies: allergies,
//     symptoms: symptoms,
//     created: new Date()
//   });
//
//   newRequest.save(function(err, patientrequest) {
//     if (err) console.log(err);
//
//     res.json(patientrequest);
//   });
// });

// POST a patient request /// WORKS, BUT NOT DOES NOT INCLUDE FACULTY ID
router.post('/patientrequest',function(req,res,next){

  var postPatientRequest = {
    facultyId: req.user.aud,
    studentName: req.body.studentName,
    studentDob: req.body.studentDob,
    studentGender: req.body.studentGender,
    allergies: req.body.allergies,
    symptoms: req.body.symptoms
  };

var newPost = new PatientRequest(postPatientRequest);

newPost.save(function(err,success){
  console.log("error",err);
  res.send("POSTED!", postPatientRequest);
  });
});


module.exports = router;
