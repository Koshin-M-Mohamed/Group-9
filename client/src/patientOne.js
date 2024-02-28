import './App.css';
import './table.css'
import './Search.css'
import Table from './table';
import Search from './Search.js';
//import fakeData from './mockData.js';
import { useApi } from './hooks/use-api';
import { Link, useParams } from 'react-router-dom';


function PatientOne() {
    const { patientId } = useParams() 
    console.log(patientId)

    
  const { response } = useApi({ path: `http://localhost:9000/exams/${patientId}`}); // change this link because now it's local 
  console.log("API response:", response);
  const exams = response ? JSON.parse(response).exams : [];
  console.log("Parsed exams:", exams);
  const columns = ['patientId', 'examId','imageURL', 'keyFindings', 'age', 'sex', 'zipCode', 'bmi', 'brixiaScores', ];
  
  const renderCell = (col, value, row, rowIndex) => {
    if (value == null) {
      return <td key={`${rowIndex}-${col}`}>N/A</td>; 
    }
        switch(col) {
            case 'patientId':
              return <Link to={`/${col}/${value}`}>{value}</Link>;
            case 'examId':
              return <Link to={`/${col}/${value}`}>{value}</Link>;
            case 'imageURL':
              return <img src={value} alt={`Exam ${row.examId}`} style={{width: "100px", height: "auto"}} />;
            default:
              return value;
          }      
 
  };

  

  return(
    <>
      <div className="App">
        <header className="App-header">
          <Link to="/Admin">Admin Page</Link>
          </header>
          <Search />
          <h1>Patient: {patientId} </h1>
          {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell}/>}        
        
      </div>
    </>
  );
}

export default PatientOne;
