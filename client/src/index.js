import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
import AddExam from './AddExam';
import EditExam from './components/EditExam';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Admin" element ={<Admin/>}/>
      <Route path="/Admin/EditExam" element={<EditExam/>} />
      <Route path="/AddExam" element ={<AddExam/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();