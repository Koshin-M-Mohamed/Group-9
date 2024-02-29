import './Admin.css'
import './table.css'
import React from "react";
//import {link} from "react-router-dom";
import Table from "./table";
import { useApi } from './hooks/use-api';
import { Link } from "react-router-dom";
import axios from 'axios';




function Admin(){
    const { response } = useApi({ path: 'table'});
    console.log("API response:", response);
    const exams = response ? JSON.parse(response).exams : [];
    console.log("Parsed exams:", exams);
    const columns = ['PATIENT_ID', 'exam_Id', 'png_filename','LATEST WEIGHT', 'LATEST_BMI', 'AGE', 'SEX', 'Action'];
               
    //Edit interface needed to implement editing logic
    const handleEdit = (exam_Id) => {
        console.log("Editing exam");
        //history.push(`/edit-exam/${examId}`);
    };

    const handleDelete = async(exam_Id, PATIENT_ID) => {
        try{
            const url = `http://localhost:9000/exam/${PATIENT_ID}/${exam_Id}`;
            const response = await axios.delete(url);
            console.log(response);


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
    
      const makeButtonLink = (col, row) => {
        
        return (
            <>
            <EditButton onClick={() => handleEdit(row.exam_Id, row.PATIENT_ID)} Label="Edit" />
            <DeleteButton onClick={() => handleDelete(row.exam_Id, row.PATIENT_ID)} Label="Delete" /> 
            </>
        );
     };



  const renderCell = (col, value, row, rowIndex) => {
    if (col != 'Action' && value == null) {
        return <td key={`${rowIndex}-${col}`}>N/A</td>;
    } else {
        switch (col) {
            case 'Action':
                
                return makeButtonLink(col, row);
            case 'png_filename':
                return <img src={value} alt={`Exam ${row.exam_Id}`} style={{ width: "100px", height: "auto" }} />;
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