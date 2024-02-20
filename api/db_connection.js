const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://juniordiaz:lXiE5ZnhWA3jkfoA@techdive.kutpblg.mongodb.net").then(() => console.log("Initiating EVO Moment#37"));

const examSchema = new mongoose.Schema({
    PATIENT_ID: String,
    AGE: Number,
    SEX: String,
    ZIP: Number,
    LATEST_BMI: mongoose.Schema.Types.Mixed,
    LATEST_WEIGHT: mongoose.Schema.Types.Mixed,
    png_filename: String,
    exam_Id: String,
    'ICU Admit': String,
    '# ICU admits': Number,
    Mortatlity: String
});

const Exam = mongoose.model('Exam', examSchema);
module.exports = Exam;