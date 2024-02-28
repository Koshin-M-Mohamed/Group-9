import './App.css';
import './table.css'
import './Search.css'
import Table from './table';
import Search from './Search.js';
//import fakeData from './mockData.js';
import { useApi } from './hooks/use-api';
import { Link } from 'react-router-dom';

function App() {

  const { response } = useApi({ path: 'table'});
  console.log("API response:", response);
  const exams = response ? JSON.parse(response).exams : [];
  console.log("Parsed exams:", exams);
  const columns = ['PATIENT_ID', 'exam_Id', 'png_filename','AGE', 'SEX', 'LATEST WEIGHT', 'LATEST_BMI', 'ICU Admit'];

  var Patient_ID = '';
  var exam_Id = '';
  
  const renderCell = (col, value, row, rowIndex) => {
    if (value == null) {
      return <td key={`${rowIndex}-${col}`}>N/A</td>; 
    }
    switch(col) {
      case 'PATIENT_ID':
        Patient_ID = value;
        return <Link to={`/${col}/${value}`}>{value}</Link>;
      case 'exam_Id':
        exam_Id = value;
        return <Link to={`exams/${Patient_ID}/${exam_Id}`} state={{'Patient_ID' : Patient_ID, 'exam_Id':exam_Id}}>{value}</Link>;
      case 'png_filename':
        const filename = 'https://ohif-hack-diversity-covid.s3.amazonaws.com/covid-png/' + value;
        return <img src={filename} alt={`Exam ${row.examId}`} style={{width: "100px", height: "auto"}} />;
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
          {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell}/>}        
        
      </div>
    </>
  );
}

export default App;
