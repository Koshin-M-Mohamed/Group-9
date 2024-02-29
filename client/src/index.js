import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import AddExam from './AddExam';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PatientOne from "./patientOne"
import ExamViewer from './pages/ExamView';
import SearchResultsPage from "./components/SearchResultsPage";
import EditExam from "./EditExam"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Admin" element ={<Admin/>}/>
      <Route path="/AddExam" element ={<AddExam/>}/>
      <Route path="/patientResults/:patientId" element={<PatientOne />} />
      <Route path="/exams/:Patient_ID/:exam_Id" element ={<ExamViewer Patient_ID={'COVID-19-AR-16439216'} exam_Id={'Exam-1'}/>}/>
      <Route path="/search-results" element={<SearchResultsPage />} /> {/* New route for search results */}
      <Route path="/editExam/:patientID/:examID" element={<EditExam />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();