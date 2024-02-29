import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ExamInfo from "../components/ExamInfo";
import PatientInfo from "../components/Patientinfo";

function ExamViewer({Patient_ID, exam_Id}) {

    const location = useLocation();

    const uri_string = ('http://localhost:9000/exam/' + location.state.Patient_ID + '/' + location.state.exam_Id);

    const [exam, setExam] = useState();


    useEffect(() => {
        const fetch_data = async () => {
            const response = await fetch(uri_string);
            const data = await response.json();
            setExam(data);
        }
        fetch_data();
    }, []);

    const examInfo = exam;
    console.log(examInfo);
    
    if (examInfo) {

        return (
        < >
            <div className="App">
                <header className="App-header">
                <Link to="/Admin">Admin Page</Link>
                </header>      
            </div>
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