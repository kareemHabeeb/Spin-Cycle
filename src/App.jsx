import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Pricing from "./Pages/Services/Pricing&Services";
import About from "./Pages/About/About";
import Signup from "./Auth/Signup/Signup";
import Logout from "./Auth/Logout/Logout";
import Login from "./Auth/Login/Login";
import Overview from "./Pages/Dashboards/Overview/Overview";
import Business from "./Pages/Business/Business";
import Pickup from "./Pages/Dashboards/Pickup Schedule/Pickup";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing&services" element={<Pricing />} />
        <Route path="/about" element={<About />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/business" element={<Business />} />
        <Route path="/login" element={<Login />} />
        <Route path="/overview" element={<Overview />} />
        <Route path="/pickup schedule" element ={<Pickup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
