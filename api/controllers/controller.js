const Exam = require('../db_connection');

// Produce a function that takes patientID, examID as argument and finds the entry in our database that matches these and returns it as an object

// Produce a function that takes patientID as argument, and returns a structure containing all exam objects associated with that patient

// Produce a function that takes no arguments, and returns the entire collection of exam objects

// Produce a function that takes patientID, examID and a updated exam object and update the database entry associated with this patientID and examID

// Produce a function that takes PatientID and examID as argument and delete the associated exam
function DeleteExam(PatientID, EXAMID) {
    Exam.findOneandDelete({'PATIENT_ID': PatientID, 'exam_Id': EXAMID});
    return 0;
};
// Produce a function that takes an exam object as argument and adds it to the database 
function CreateExam(PatientID, EXAMID, ExamInfo){
    new_exam = new Exam(ExamInfo);
    new_exam.save();
    return 0;
};