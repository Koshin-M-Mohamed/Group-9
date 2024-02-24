const Exam = require('../models/exam');

const getInitialData = async () => {
    try {
        // Assuming you have a model to fetch some initial data, for example, a list of exams
        const initialData = await Exam.find(); // Adjust this line based on what initial data you want to fetch

        // If data is found, return it
        if (initialData) {
            return initialData;
        } else {
            // If no data is found, you might want to return an empty array or a default object
            return [];
        }
    } catch (err) {
        // If an error occurs, log the error and return null or an error message
        console.log('Error fetching initial data:', err);
        return null;
    }
};

// for controller function, make sure to get all exams for the patient_ID passed as argument 

const getAllExams = async (P_ID) => {
    try {
        // Retrieve all exam data from MongoDB using Mongoose
        const allExams = await Exam.find({PATIENT_ID: P_ID});

        // If exams are found, return them
        if (allExams) {
            return allExams;
        } else {
            return null;
        }
    } catch (err) {
        // If an error occurs, log the error and return null
        console.error('Error fetching all exams:', err);
        return null;
    }
};


const getExamByPatientAndExamId = async (P_ID, e_Id) => {
    try { 

        console.log(P_ID);
        console.log(e_Id);
        // Retrieve exam data from MongoDB using Mongoose
        const exam = await Exam.findOne({ PATIENT_ID: P_ID, exam_Id: e_Id });

        // If exam data is found, return it
        if (exam) {
            return exam;
        } else {
            // If exam data is not found, return null
            return null;
        }
    } catch (err) {
        // If an error occurs, log the error and return null
        console.error('Error fetching exam:', err);
        return null;
    }
};


const editExam = async (P_ID, e_Id, examInstance) => {
    try {
        // Find the exam object by its Patient ID and Exam ID and update it with the information from examInstance
        const updatedExam = await Exam.findOneAndUpdate(
            { PATIENT_ID: P_ID, exam_Id: e_Id },
            examInstance,
            { new: true }
        );

        // Check if the exam was found and updated successfully
        if (updatedExam) {
            console.log('Exam updated successfully:', updatedExam);
            return updatedExam;
        } else {
            console.log('Exam not found or not updated');
            return null;
        }
    } catch (err) {
        // If an error occurs, log the error and return null
        console.error('Error updating exam:', err);
        return null;
    }
};
// Export the controller function
module.exports.getExamByPatientAndExamId = getExamByPatientAndExamId;
module.exports.getInitialData = getInitialData;
module.exports.getAllExams = getAllExams;
module.exports.editExam = editExam;