import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import PatientOne from './patientOne'; //import patient from component file 
import AddExam from './AddExam';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/:patientId" element={<PatientOne />} />

          <Route path="/AddExam" element={<AddExam />} />
        </Routes>
      </React.StrictMode>
    </BrowserRouter>
  );
  
  reportWebVitals();