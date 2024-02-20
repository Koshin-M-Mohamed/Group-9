import './Admin.css'
import './table.css'
import React from "react";
import Table from "./table";
import { useApi } from './hooks/use-api';
import { Link } from "react-router-dom";
import AddExam from "./AddExam";



function Admin(){
    const { response } = useApi({ path: 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'});
    console.log("API response:", response);
    const exams = response ? JSON.parse(response).exams : [];
    const adminPageColumns = ['patientId', 'examId','imageURL', 'keyFindings', 'age', 'sex', 'Edit', 'Delete'];

    //Function To Add edit or delete buttons to a cell
    const makeButton = (colName, data, row, rowIndex) => {
        if (colName === 'Delete'){
            return <button onClick={()=> handleDelete(row, rowIndex)}>Delete</button>;
        }
        else if(colName==='Edit'){
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

    const renderCell = (col, value, row, rowIndex) => {
        if (['Edit', 'Delete'].includes(col)) {
            // Add 'Edit' and 'Delete' columns
            return <td key={`${rowIndex}-${col}`}>{makeButton(col, row, rowIndex)}</td>;
        } else if (value == null) {
            return <td key={`${rowIndex}-${col}`}>N/A</td>;
        } else {
            switch (col) {
                case 'patientId':
                case 'examId':
                    return <td key={`${rowIndex}-${col}`}><Link to={`/${col}/${value}`}>{value}</Link></td>;
                case 'imageURL':
                    return <td key={`${rowIndex}-${col}`}><img src={value} alt={`Exam ${row.examId}`} style={{ width: "100px", height: "auto" }} /></td>;
                default:
                    return <td key={`${rowIndex}-${col}`}>{value}</td>;
            }
        }
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