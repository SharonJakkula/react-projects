import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Search from './Search';

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:imgname" element={<Search />} />

          </Routes>
        </BrowserRouter>
      </div>
      <p className="read-the-docs">
      </p>
    </>
  );
};

export default App;
