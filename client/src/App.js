import './App.css';
import Table from './table';
import fakeData from './mockData.js';
import { useApi } from './hooks/use-api';

function App() {
  //const { response } = useApi();
  const response = fakeData;
  // display columns 
  const columns = ['Patient_ID', 'Age', 'Sex', 'Zip', 'Latest_BMI', 'Latest_Weight', 'Image', 'Exam_Id', 'ICU_Admit', 'ICU_admits', 'Mortality'];
  return (
    <>
      {/* <div className='search-bar-Container'>
        <div className='searchBar'>
          <input type="text" className="search-input" placeholder="Search..." />
          <button className="search-btn">Search</button>
        </div>
      </div> */}
      <div className="App">
        <header className="App-header">
          {response && <Table data={response} cols={columns}/>}
        </header>
      </div>
    </>
  );
}
export default App;

