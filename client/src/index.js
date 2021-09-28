import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
import "react-quill/dist/quill.snow.css";



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
   
    <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


