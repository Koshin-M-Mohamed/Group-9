import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useApi } from './hooks/use-api';
import ExamView from './pages/ExamView';

function App() {
  const { response } = useApi();

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <p>
            {response}
          </p>
        </header>
        <Routes>
          <Route 
          path="/ExamView"
          element={<ExamView />}>    
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
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
    <div className="App">
      <header className="App-header">
          {response && <Table data={response} cols={columns}/>}
      </header>
    </div>
  );
}

export default App;

