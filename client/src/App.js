import './App.css';
import Table from './table';
import { useApi } from './hooks/use-api';

function App() {
  const { response } = useApi();
  // Mock data
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

