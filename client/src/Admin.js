import React from "react";
import Table from "./table";
import {fakeData} from './mockData'

function Admin(){
    const adminPageColumns = ['Patient_ID', 'Exam_Id', 'Age', 'Sex', 'Zip',  'Image', 'Edit', 'Delete'];
    //Function To Add edit or delete buttons to a cell
    const makeButton = (colName, data, row, rowIndex) => {
        if (colName == 'Delete'){
            return <button onClick={()=> handleDelete(row, rowIndex)}>Delete</button>;
        }
        else if(colName=='Edit'){
            return <button onClick={()=> handleEdit(row, rowIndex)}>Edit</button>;
        }
        else{
            return data; 
        }
    };
    // Fuction to delete data from a row
    const handleDelete = (row, rowIndex) => {
        console.log("Deleting Exam Data", rowIndex, row);
        //function tbd
    };
    // Function to edit exam information
    const handleEdit = (row, rowIndex) => {
        console.log("Editing Exam Data", rowIndex, row);
        //function tbd
    };

    return(

        <div>
            <h1>Admin Page</h1>
            <Table data={fakeData} cols={adminPageColumns} renderCell={makeButton}/>
        </div>
    )
}
export default Admin;