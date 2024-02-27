var express = require('express');
var router = express.Router();
const { getExamByPatientAndExamId, editExam, deleteExam, createAndAddExam } = require('../controllers/controller')
const {getInitialData} = require('../controllers/controller')
const {getAllExams} = require('../controllers/controller')
const {getMatchingExams} = require('../controllers/controller')
const {getMatchingPatients} = require('../controllers/controller')


/* GET home page. */

router.use(express.json());

router.get('/table', async function(req, res, next) { 
  console.log("get request received");
  try {
    const exam = await getInitialData();
    res.json({"exams":exam});
  } catch (error) {
    next(error);
  }
});


router.get('/patient/:PATIENT_ID', async function(req,res){  
  // The req is going to be a set of one key value pair which is just the patientID
  console.log("get request recieved");

  const PatientID = req.params.PATIENT_ID;

  try {
    // Pass those variables as arguments to the controller function which will return an object containing information pertaining to exam
    const exam = await getAllExams(PatientID);

    // Send the exam object as the response
    res.json(exam);
  } catch (error) {
    console.log(error);
  }

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
router.delete('/exam/:PATIENT_ID/:exam_Id', async function(req,res,next) {
  // The request object must contain two key value pairs: the patient ID and the exam ID

  // Parse the request for the patient ID/exam ID and pass these to the controller function associated with deleting from database
  const P_ID = req.params.PATIENT_ID;
  const e_ID = req.params.exam_Id;

  // Controller function can return some status code for successful deletion 
  delete_check = await deleteExam(P_ID,e_ID);

  if (delete_check.deletedCount == 1) {
    // Send success status message
    res.status(200).send('Exam Successfully Deleted');
  } else {
    // Send error status message
    res.status(500).send("There was an issue with deleting the exam, please try again later.")
  }
});


// An endpoint to add a new exam to the database
router.post('/exam', async function(req,res,next){
  // The request object must contain an exam object
  const new_Exam = req.body;
  // Call a controller function which takes the exam object as an argument and adds the exam object to our database
  if( await createAndAddExam(new_Exam)){
    // Send a success status code to the client 
    res.status(201).send('Exam Created Successfully');
  } else {
    // Send an error code to the client
    res.status(500).send('There was an issue saving the exam, please try again later.');
  }

});

router.get("/searchResults/exams/:queryString", async function(req,res){
  // Obtain matching exams
  const queryString = req.params.queryString;


  try {
    // Pass those variables as arguments to the controller function which will return an object containing information pertaining to exam
    const matchingExams = await getMatchingExams(queryString);

    // Send the exam object as the response
    res.json(matchingExams);
  } catch (error) {
    
    console.log(error);
  }
});

router.get("/searchResults/patient/:queryString", async function(req,res){
  // Obtain matching patients
  const queryString = req.params.queryString;


  try {
    // Pass those variables as arguments to the controller function which will return an object containing information pertaining to exam
    const matchingExams = await getMatchingPatients(queryString);

    // Send the exam object as the response
    res.json(matchingExams);
  } catch (error) {
    
    console.log(error);
  }
});

module.exports = router;

