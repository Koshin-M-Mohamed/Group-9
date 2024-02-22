import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Admin from './Admin';
import Search from './Search';
//import CreateExam from './components/CreateExam.js';
import Button from './components/Button.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Patient from './pages/Patient.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          {/* Define a unique path for each component */}
          <Route index element={<Search />} />
          <Route path="button" element={<Button />} />
        </Route>
        <Route path="/Admin" element={<Admin/>}/>
        <Route path="/Patient" element={<Patient/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();