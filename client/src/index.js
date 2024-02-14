import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Search from './Search';
import AddDelete from './button'; // Renamed addDelete to AddDelete
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Search />
    <AddDelete /> 
  </React.StrictMode>
);

reportWebVitals();

