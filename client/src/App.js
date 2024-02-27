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
  
  const renderCell = (col, value, row, rowIndex) => {
    if (value == null) {
      return <td key={`${rowIndex}-${col}`}>N/A</td>; 
    }
    switch(col) {
      case 'PATIENT_ID':
        return <Link to={`/${col}/${value}`}>{value}</Link>;
      case 'exam_Id':
        return <Link to={`/${col}/${value}`}>{value}</Link>;
      case 'png_filename':
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
          {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell}/>}        
        
      </div>
    </>
  );
}

export default App;
