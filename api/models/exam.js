const mongoose = require('mongoose')





       

// We will create a schema, which will define the specifications of our datastructure
// The argument should be an object with attributes and the types
ExamSchema = new mongoose.Schema({
    "AGE": {type: Number},
    "SEX": {type: String},
    "ZIP": {type: Number},
    "LATEST_BMI": {type: Number},
    "exam_Id": {type: String},
    "ICU Admit": {type: String},
    "# ICU admits": {type: Number},
    "MORTALITY": {type: String},
    "LATEST WEIGHT": {type: Number},
    "PATIENT_ID": {type: String},
    "png_filename": {type: String},
});
// Now, we have a specification of what the datastructure must adhere to
// We will create a model, which feels like some sort of class that can be instantiated
// to produce instances of the model


// To produce this model we pass two arguments, the first being the name of this model
// This name will also relate to the collection that is associated with this model
// Meaning, when we save an instance of this model, it will be saved to a collection
// With a name that is the pluralized, lowercase version of the name of the model
// If no such collection exists, it will be created. The second argument is the schema
// or the blueprint of what instances of this model will look like
module.exports = mongoose.model('Exam', ExamSchema, 'Exams');