import './App.css';
import Table from './table';
import Search from './Search.js';
import fakeData from './mockData.js';
//import { useApi } from './hooks/use-api';
import { Link } from 'react-router-dom';

function App() {
  //const { response } = useApi();
  const response = fakeData;
  // display columns 
  const columns = ['Patient_ID', 'Age', 'Sex', 'Zip', 'Latest_BMI', 'Latest_Weight', 'Image', 'Exam_Id', 'ICU_Admit', 'ICU_admits', 'Mortality'];
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Link to="/Admin">Admin Page</Link>
          <Search />
          {response && <Table data={response} cols={columns}/>}
        </header>
      </div>
    </>
  );
}
export default App;


