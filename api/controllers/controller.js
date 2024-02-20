const Exam = require('../models/exam');

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
module.exports.editExam = editExam;