import './Admin.css';
import './table.css';
import React from "react";
import Table from "./table";
import { useApi } from './hooks/use-api';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Admin() {
    const { response } = useApi({ path: 'table' });
    console.log("API response:", response);
    const exams = response ? JSON.parse(response).exams : [];
    console.log("Parsed exams:", exams);
    const columns = ['PATIENT_ID', 'exam_Id', 'png_filename', 'LATEST WEIGHT', 'LATEST_BMI', 'AGE', 'SEX', 'Action'];

    const navigate = useNavigate();

    const handleDelete = async (exam_Id, PATIENT_ID) => {
        try {
            const url = `http://localhost:9000/exam/${PATIENT_ID}/${exam_Id}`;
            const response = await axios.delete(url);
            console.log(response);
        } catch (error) {
            console.error("Error deleting exam:", error);
            alert("Failed to Delete");
        }
    };

    const EditButton = ({ examId, patientId }) => {
        const handleEdit = () => {
            navigate(`/editExam/${patientId}/${examId}`);
        };

        return (
            <button onClick={handleEdit}>
                Edit
            </button>
        );
    };

    const DeleteButton = ({ examId, patientId }) => {
        const handleDeleteClick = () => {
            handleDelete(examId, patientId);
        };

        return (
            <button onClick={handleDeleteClick}>
                Delete
            </button>
        );
    };

    const makeButtonLink = (col, row) => {
        return (
            <>
                <EditButton examId={row.exam_Id} patientId={row.PATIENT_ID} />
                <DeleteButton examId={row.exam_Id} patientId={row.PATIENT_ID} />
            </>
        );
    };

    const renderCell = (col, value, row, rowIndex) => {
        if (col !== 'Action' && value === null) {
            return <td key={`${rowIndex}-${col}`}>N/A</td>;
        } else {
            switch (col) {
                case 'Action':
                    return makeButtonLink(col, row);
                case 'patientId':
                    return <Link to={`/exams/${row.PATIENT_ID}/${row.exam_Id}`} state={{ 'Patient_ID': row.PATIENT_ID, 'exam_Id': row.exam_Id }}>{value}</Link>;
                case 'png_filename':
                    const filename = 'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/' + value;
                    return <img src={filename} alt={`Exam ${row.exam_Id}`} style={{ width: "100px", height: "auto" }} />;
                default:
                    return value;
            }
        }
    };

    return (
        <div>
            <header className="adminHeader">
                <h1>Admin Page</h1>
            </header>
            <div class= "AddExamContainer">
            <Link to="/AddExam" className="LinkToAdd">Add Exam</Link>
            </div>
            {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell} />}
        </div>
    );
}

export default Admin;