var express = require('express');
var router = express.Router();
const { getExamByPatientAndExamId, editExam } = require('../controllers/controller')

/* GET home page. */


// Gets all the information required to populate on table 
router.get('/table', function(req, res, next) {
  // Calls controller function to return whole collection
  res.send('API is working properly!');
});



// A route that gets information regarding some particular patient
router.get('/patient', function(req,res,next){
  // The req is going to be a set of one key value pair which is just the patientID

  const PatientID = req.PATIENT_ID;
   
  // Parse the request and get the patientID and then pass it as an argument to the controller function

  // Calls controller function to obtain a structure { {the first exam object pt}, {the second exam object pt}, ...}
});

// An endpoint to get particular information regarding an exam
// Julian
router.get('/exam/:PATIENT_ID/:exam_Id', async function(req, res, next) {
  // Calls controller function to obtain information regarding the particular exam
  // the req is going to be a set of 2 k-v pairs, the first being PatientId, the second being the ExamId
  // Parse the req object, and obtain both the patientID and the ExamId and store them in variables
  const PATIENT_ID = req.params.PATIENT_ID;
  const exam_Id = req.params.exam_Id;

  try {
    // Pass those variables as arguments to the controller function which will return an object containing information pertaining to exam
    const exam = await getExamByPatientAndExamId(PATIENT_ID, exam_Id);

    // Send the exam object as the response
    res.json(exam);
  } catch (error) {
    // If an error occurs, pass it to the error handling middleware
    next(error);
  }
});

// An endpoint to update information regarding some exam
// Julian 
router.put('/exam/:PATIENT_ID/:exam_Id', async function(req,res,next){
  // The reuqest must be an object containing all the key value pairs, with the key value pairs updated (but not examID or patientID)

  // Parse the request for the patient ID/exam ID, and pass patientID, examID, and the updated object as arguments to the controller function
  const PATIENT_ID = req.params.PATIENT_ID;
  const exam_Id = req.params.exam_Id;
  // Controller function can return a copy of the updated entry
  // console.log(req.body);
  try {
    // Pass those variables as arguments to the controller function which will return an object containing information pertaining to exam
    const exam = await editExam(PATIENT_ID, exam_Id, req.body);

    // Send the exam object as the response
    res.json(exam);
  } catch (error) {
    
    console.log(error);
  }

});


// An endpoint to delete some exam
router.delete('/exam', function(req,res,next){
  // The request object must contain two key value pairs: the patient ID and the exam ID

  // Parse the request for the patient ID/exam ID and pass these to the controller function associated with deleting from database

  // Controller function can return some status code for successful deletion 

});


// An endpoint to add a new exam to the database
router.post('/exam', function(req,res,next){
  // The request object must contain an exam object
  
  // Call a controller function which takes the exam object as an argument and adds the exam object to our database

  // Send a success status code to the client 
  

});






module.exports = router;
