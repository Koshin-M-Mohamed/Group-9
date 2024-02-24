import ExamInfo from "../components/ExamInfo";
import PatientInfo from "../components/Patientinfo";



async function _fetchExam(Patient_ID, exam_Id) {
    uri_string = 'localhost:9000' + Patient_ID + exam_Id
    const request = new Request(uri_string);
    const response = await fetch(request).json();

    return response;
};

function ExamViewer({Patient_ID, exam_Id}) {

    exam = JSON.parse(_fetchExam(Patient_ID, exam_Id));
    patientInfo = {
        'Patient_ID' : exam.Patient_ID,
        'Age': exam.Age,
        'Sex': exam.Sex,
        'Zip': exam.Zip,
        'Latest_BMI': exam.Latest_BMI,
        'Latest_weight': exam.Latest_weight,
    };
    examInfo = {
        'Exam Id': exam.exam_Id,
        'ICU Admit': exam.ICU_Admit,
        'ICU Admits': exam.ICU_admits,
        'Mortality': exam.Mortality
    };

    return (
    < >
    <div className="App-examwindow">
        <ExamInfo className="App-examwindow"/>
        <PatientInfo className="App-patientwindow"/>
    </div>
    </>);
}

export default ExamViewer;