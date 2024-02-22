import React from "react";
//import {link} from "react-router-dom";
import Table from "./table";
import fakeData from './mockData.js';
import DeleteButton from "./components/DeleteButton.js";
import EditButton from "./components/EditButton.js";
import { Link } from "react-router-dom";

function Admin() {    
    const adminPageColumns = ['Patient_ID', 'Exam_Id', 'Age', 'Sex', 'Zip',  'Image', 'Action'];

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

    return (
      <div className="Admin">
        <header className="Admin-header">
          {/* NOTE: create button here */}
          {fakeData && (
            <Table
              data={fakeData}
              cols={adminPageColumns}
              renderCell={makePatientLink}
            />
          )}
        </header>
      </div>
    );
 }
      
export default Admin;