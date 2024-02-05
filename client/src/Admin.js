import React from "react";
import Table from "./table";

function Admin(){
    const adminPageColumns = ['Patient_ID', 'Exam_Id', 'Age', 'Sex', 'Zip',  'Image', 'Edit', 'Delete'];
    //Function To Add edit or delete buttons to a cell
    const makeButton = (colName, data, row, rowIndex) => {
        if (colName == 'Delete'){
            return <button onClick={()=> deleteExam(row, rowIndex)}>Delete</button>;
        }
        else if(colName=='Edit'){
            return <button onClick={()=> editExam(row, rowIndex)}>Edit</button>;
        }
        else{
            return data; 
        }
    };
    // Fuction to delete data from a row
    const deleteExam = (row, rowIndex) => {
        console.log("Deleting Exam Data", rowIndex, row);
    };
    // Function to edit exam information
    const editExam = (row, rowIndex) => {
        console.log("Editing Exam Data", rowIndex, row);
    };

    return(

        <div>
            <h1>Admin Page</h1>
            <Table data={response} cols={adminPageColumns} renderCell={makeButton}/>
        </div>
    )
}
export default Admin;