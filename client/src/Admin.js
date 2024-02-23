import './Admin.css'
import './table.css'
import React from "react";
//import {link} from "react-router-dom";
import Table from "./table";
import DeleteButton from "./components/DeleteButton.js";
import EditButton from "./components/EditButton.js";
import { Link } from "react-router-dom";



function Admin(){
    const adminPageColumns = ['Patient_ID', 'Exam_Id', 'Age', 'Sex', 'Zip',  'Image', 'Edit', 'Delete'];
    //Function To Add edit or delete buttons to a cell
    const makePatientLink = (colName, data, row, rowIndex) => {

        //Patient-ID
        if (colName === "Patient_ID") {
          return <Link to={`/Patient?Patientid=${data}`}>{data}</Link>;
        }
        // Action
    if(colName === "Action"){
      return (
        <>
          <DeleteButton Label={"delete"}/>
          <EditButton Label={"edit"}/> 
        </>
      )    
    }
    
    return data;
  };

    return(
        <div>
            <header className="adminHeader">
            <h1>Admin Page</h1>
            </header>
            <Link to="/AddExam">Add Exam</Link>
            {exams.length > 0 && <Table data={exams} cols={adminPageColumns} renderCell={renderCell}/>}
        </div>
    )

}
export default Admin;