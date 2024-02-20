const mongoose = require('mongoose')

async function connect () {
    try {
        await mongoose.connect('mongodb+srv://julianbiju001:Password123@techdive.jkyexu6.mongodb.net/PatientData?retryWrites=true&w=majority');
        console.log("works")
  
        
    } catch (error) {
        console.log(error.message);
    }
  
    
  }
  
  connect()



       

// We will create a schema, which will define the specifications of our datastructure
// The argument should be an object with attributes and the types
ExamSchema = new mongoose.Schema(
    {"AGE": Number},
    {"SEX": String},
    {"ZIP": Number},
    {"LATEST_BMI": Number},
    {"Patient Name": String},
    {"exam_Id": String},
    {"ICU Admit": String},
    {"# ICU admits": Number},
    {"MORTALITY": String},
    {"LATEST WEIGHT": Number},
    {"PATIENT_ID": String},
    {"png_filename": String},


);
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