import './Admin.css'
import './table.css'
import React from "react";
//import {link} from "react-router-dom";
import Table from "./table";
import { useApi } from './hooks/use-api';
import { Link } from "react-router-dom";



function Admin(){
    const { response } = useApi({ path: 'table'});
    console.log("API response:", response);
    const exams = response ? JSON.parse(response).exams : [];
    console.log("Parsed exams:", exams);
    const columns = ['PATIENT_ID', 'examId','LATEST WEIGHT', 'LATEST_BMI', 'AGE', 'SEX', 'Action'];
        
    //Edit interface needed to implement editing logic
    const handleEdit = (examID) => {
        console.log("Editing exam");
        //history.push(`/edit-exam/${examId}`);
    };

    const handleDelete = async(examId) => {
        try{
            await fetch('https://czi-covid-lypkrzry4q-uc.a.run.app/api/patient/COVID-19-AR-16406504', {
                method: 'DELETE',
            });
            alert("Exam Deleted");
        } catch(error){
            console.error("Error deleting exam:", error);
            alert("Failed to Delete");
        }
    };

    const EditButton = ({onClick, Label}) => {
        return (
              <button onClick={onClick} >
              {Label}
              </button>);
      };

      const DeleteButton = ({onClick, Label}) => {
        return (
            <button onClick={onClick}>
                {Label}
                </button>);
      };
    
      const makeButtonLink = (col, row, rowIndex) => {

        return (
            <>
            <EditButton onClick={() => handleEdit(row.examId)} Label="Edit" />
            <DeleteButton onClick={() => handleDelete(row.examId)} Label="Delete" /> 
            </>
        );
     };



  const renderCell = (col, value, row, rowIndex) => {
    if (col != 'Action' && value == null) {
        return <td key={`${rowIndex}-${col}`}>N/A</td>;
    } else {
        switch (col) {
            case 'Action':
                return makeButtonLink(col, row, rowIndex);
            case 'patientId':
            case 'examId':
                return <Link to={`/${col}/${value}`}>{value}</Link>;
            case 'imageURL':
                return <img src={value} alt={`Exam ${row.examId}`} style={{ width: "100px", height: "auto" }} />;
            default:
                return value;
        }
    }
};


    return(
        <div>
            <header className="adminHeader">
            <h1>Admin Page</h1>
            </header>
            <Link to="/AddExam">Add Exam</Link>
            {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell}/>}
        </div>
    )

}
export default Admin;