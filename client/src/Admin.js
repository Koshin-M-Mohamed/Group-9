import './Admin.css'
import './table.css'
import React from "react";
//import {link} from "react-router-dom";
import Table from "./table";
import { useApi } from './hooks/use-api';
import { Link } from "react-router-dom";



function Admin(){
    const { response } = useApi({ path: 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'});
    console.log("API response:", response);
    const exams = response ? JSON.parse(response).exams : [];
    console.log("Parsed exams:", exams);
    const columns = ['patientId', 'examId','imageURL', 'keyFindings', 'age', 'sex', 'Action'];
        //Function To Add edit or delete buttons to a cell
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
    
      const makeButtonLink = (colName, data) => {

        return (
            <>
            <DeleteButton Label={"delete"}/>
            <EditButton Label={"edit"}/> 
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