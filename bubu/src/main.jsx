import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Display from "./Display";
import Yes from "./Yes";

import './index.css';  // <-- add this line here

ReactDOM.createRoot(document.getElementById("root")).render(
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
