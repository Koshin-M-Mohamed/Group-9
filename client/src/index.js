import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import AddExam from './AddExam';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SearchResultsPage from "./components/SearchResultsPage";
import PatientOne from "./patientOne"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Admin" element ={<Admin/>}/>
      <Route path="/AddExam" element ={<AddExam/>}/>
      <Route path="/search-results" element={<SearchResultsPage />} /> {/* New route for search results */}
      <Route path="/patientResults/:patientId" element={<PatientOne />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();