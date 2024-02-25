import ExamInfo from "../components/ExamInfo";
import PatientInfo from "../components/Patientinfo";
import { useApi } from "../hooks/use-api";



function _fetchExam(Patient_ID, exam_Id) {
    const uri_string = ('exam/' + Patient_ID + '/' + exam_Id);
    const response = useApi({ path : uri_string});
    console.log(response);

    return response;
};

function ExamViewer({Patient_ID, exam_Id}) {

    const exam = _fetchExam(Patient_ID, exam_Id);
    console.log('exam', exam);

    const examInfo = JSON.parse(exam['response']);
    console.log(examInfo);
    
    if (examInfo) {

        return (
        < >
        <div className="App-examwindow">
            <ExamInfo className="App-examwindow" examInfo= {examInfo}/>
            <PatientInfo className="App-patientwindow" patientInfo= {examInfo}/>
        </div>
        </>);
    } else {
        
        return (
        <h1>No Exam Specified</h1>
        );
    }
};

export default ExamViewer;