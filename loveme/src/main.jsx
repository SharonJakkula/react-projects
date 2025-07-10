import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import App from './App.jsx';
import Display from './Display.jsx';
import Yes from './Yes.jsx';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/display" element={<Display />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
