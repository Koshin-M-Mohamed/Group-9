import ExamInfo from "../components/ExamInfo";
import PatientInfo from "../components/Patientinfo";

function ExamViewer() {
    return (
    <div className="App-examwindow">
        <ExamInfo className="App-examwindow"/>
        <PatientInfo className="App-patientwindow"/>
    </div>);
}

export default ExamViewer;