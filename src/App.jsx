import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Services/Pricing&Services";
import About from "./Pages/About/About";
import Signup from "./Auth/Signup/Signup";
import Logout from "./Auth/Logout/Logout"
import Login from "./Auth/Login/Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing&services" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
