import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Table from './table';
import Search from './Search';
import { Link, useParams } from 'react-router-dom';
import './patientOne.css';

function PatientOne() {
  const { patientId } = useParams();
  console.log("The patient ID we are going to use is: " + patientId);
  const [exams, setExams] = useState([]);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await axios.get(`http://localhost:9000/exams/${patientId}`);
        console.log("Received response:", response.data);
        setExams(response.data); // Set the exams state with the response data
      } catch (error) {
        console.log('Failed to fetch exams:', error);
      }
    };
    fetchExams(); // Call the async function to execute when component mounts
  }, [patientId]); // Include patientId in dependency array to re-fetch exams when patientId changes

  const columns = [
    'PATIENT_ID',
    'exam_Id',
    'AGE',
    'SEX',
    'ZIP',
    'LATEST_BMI',
    'ICU Admit',
    '# ICU admits',
    'MORTALITY',
    'LATEST WEIGHT',
    'png_filename'
  ];

  const renderCell = (col, value, row, rowIndex) => {
    if (value == null) {
      return <td key={`${rowIndex}-${col}`}>N/A</td>;
    }
    return <td key={`${rowIndex}-${col}`}>{value}</td>;
  };

  return (
    <div className="App">
      <header className="App-header">
        <Link to="/Admin">Admin Page</Link>
      </header>
      <Search />
      <h1>Patient: {patientId}</h1>
      {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell} />}
    </div>
  );
}

export default PatientOne;