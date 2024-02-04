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
