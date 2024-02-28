import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import AddExam from './AddExam';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ExamViewer from './pages/ExamView';
import SearchResultsPage from "./components/SearchResultsPage";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Admin" element ={<Admin/>}/>
      <Route path="/AddExam" element ={<AddExam/>}/>
      <Route path="/exams/:exam_Id/:Patient_Id" element ={<ExamViewer Patient_ID={'COVID-19-AR-16439216'} exam_Id={'Exam-1'}/>}/>
      <Route path="/search-results" element={<SearchResultsPage />} /> {/* New route for search results */}
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();