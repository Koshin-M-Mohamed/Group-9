import './App.css';
import Table from './table';

import { useApi } from './hooks/use-api';

function App() {
  //const { response } = useApi();
  // mock data for column display
  const fakeData =  Array.from({ length: 10 }, (_, i) => ({
      PATIENT_ID: `PATIENT_${i + 1}`,
      AGE: 20 + i + 1,
      SEX: (i + 1) % 2 === 0 ? "M" : "F",
      ZIP: `1000${i + 1}`,
      LATEST_BMI: 22.5 + i + 1,
      LATEST_WEIGHT: 120 + (i + 1) * 5,
      png_filename: `patient_${i + 1}.png`,
      exam_Id: `EXAM_${i + 1}`,
      ICU_Admit: (i + 1) % 2 === 0 ? "Yes" : "No",
      ICU_admits: (i + 1) % 3, // Cycles through 0, 1, 2
      MORTALITY: (i + 1) % 4 !== 0 ? "Alive" : "Deceased"
    }));
  
  const response = fakeData;
  // mock columns 
  const columns = ['PATIENT_ID', 'AGE', 'SEX', 'ZIP', 'LATEST_BMI', 'LATEST_WEIGHT', 'png_filename', 'exam_Id', 'ICU_Admit', 'ICU_admits', 'MORTALITY'];
  return (  
    <div className="App">
      <header className="App-header">
          {response && <Table data={response} cols={columns}/>}
      </header>
    </div>
  );
}

export default App;

