import './App.css';
import Table from './table';
import { useApi } from './hooks/use-api';

function App() {
  //const { response } = useApi();
  // mock data for column display
  const fakeData = [
    {
      PatientID: '1',
      'Last Name': 'Morales',
      'First Name': 'Ivanna',
      DOB: '2004-08-01',
      'Medical History': 'None'
    },
    {
      PatientID: '2',
      'Last Name': 'Pascal',
      'First Name': 'Pedro',
      DOB: '1975-05-22',
      'Medical History': 'Heart Attack'
    },
    {
      PatientID: '3',
      'Last Name': 'Lee',
      'First Name': 'Mildred',
      DOB: '2001-08-19',
      'Medical History': 'Diabetes'
    }
  ];
  
  const response = fakeData;
  // Mock Columns
  const columns = ['PatientID', 'Last Name', 'First Name', 'DOB', 'Medical History'];
  return (  
    <div className="App">
      <header className="App-header">
          {response && <Table data={response} cols={columns}/>}
      </header>
    </div>
  );
}

export default App;

