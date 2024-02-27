import './App.css';
import './table.css'
import './Search.css'
import Table from './table';
import Search from './Search.js';
//import fakeData from './mockData.js';
import { useApi } from './hooks/use-api';
import { Link } from 'react-router-dom';
//import DetailUpdatePage from './components/DetailUpdatePage.js';
import EditExam from './components/EditExam.js';

function App() {

  const { response } = useApi({ path: 'https://czi-covid-lypkrzry4q-uc.a.run.app/api/exams'});
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
          {exams.length > 0 && <Table data={exams} cols={columns} renderCell={renderCell}/>}       
      </div>
    </>
  );
  };

export default App;
