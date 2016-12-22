
var express = require('express');
var router = express.Router();
var ProviderModel = require('../models/providers.js');
var FacultyModel = require('../models/faculties.js');
var PatientRequest = require('../models/patientrequest.js');
var FacultyRequest = require('../models/facultyrequest.js');

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

//Doctor PUT (Update) -- Need to Test
router.put('/doctors',function(req,res,next){
  var providerId = req.user.aud;
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
//
// //Faculty GET - don't need
// router.get('/faculty',function(req,res,next){
//   FacultyModel.find({},'',function( err,posts ){
//     if(err) console.error('Error gettting posts: ', err);
//     res.json(posts);
//   });
// });

//Faculty Signup POST -- working
router.post('/faculty',function(req,res,next){

  var postFacultyInfo = {
    facultyId: req.user.aud,
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schoolName,
    schoolPhone: req.body.schoolPhone
  };

var newPost = new FacultyModel(postFacultyInfo);

newPost.save(function(err,success){
  console.log("error",err);
  res.send("POSTED!");
  });
});

//Faculty Update (PUT) - Need to test
router.put('/faculty/',function(req,res,next){
  var facultyId = req.user.aud;
  var updateInfo = {
    fullName: req.body.fullName,
    phone: req.body.phone,
    email: req.body.email,
    schoolName: req.body.schooName,
    schoolPhone: req.body.schoolPhone
  };

  FacultyModel.findByIdAndUpdate({ facultyId: req.user.aud }, updateInfo,function(err,post){
    if(err) console.log(err);

    res.send('UPDATED THAT SH*T!');
  });
});

// // GET a faculty member -- working
// router.get('/faculty/:facultyId', function(req, res){
//   FacultyModel.find({ facultyId: req.user.aud }, function(err, faculty){
//     if (err) console.log(err);
//
//     res.json(faculty);
//     console.log(faculty);
//   });
// });

//GET all patient requests
router.get('/patientrequest/',function(req,res,next){
  PatientRequest.find({},'',function( err,posts ){
    if(err) console.error('Error getting posts: ', err);
    res.json(posts);
  });
});

//GET a patient request by facultyId
router.get('/patientrequest/:facultyId',function(req,res,next){
  PatientRequest.find({ facultyId: req.user.aud },'',function( err,posts ){
    if(err) console.error('Error gettting posts: ', err);
    res.json(posts);
  });
});

// POST a patient request with facultyId

router.post('/patientrequest',function(req,res,next){

  var postPatientRequest = {
    facultyId: req.user.aud,
    studentName: req.body.studentName,
    studentDob: req.body.studentDob,
    studentGender: req.body.studentGender,
    allergies: req.body.allergies,
    symptoms: req.body.symptoms,
    contact: req.body.contact,
    completed: req.body.completed
  };

var newPost = new PatientRequest(postPatientRequest);

newPost.save(function(err,success){
  console.log("error",err);
  res.send("POSTED!");
  });
});


module.exports = router;
