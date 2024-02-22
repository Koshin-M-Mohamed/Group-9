import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Admin from './Admin';
//import Search from './Search';
//import CreateExam from './components/CreateExam.js';
//import Button from './components/Button.js';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="/Admin" element ={<Admin/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();