import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/About/Services/Pricing&Services";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing&services" element={<Pricing />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
