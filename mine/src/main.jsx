import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './index.css';
import App from './App.jsx';
import Display from './Display.jsx';
import Yes from './Yes.jsx'; // ✅ Import the Yes component

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/display" element={<Display />} />
        <Route path="/yes" element={<Yes />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
