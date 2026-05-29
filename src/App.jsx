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
import Layout from "./Pages/DashboardLayout/Layout";
import Order from "./Pages/Dashboards/Order/Order";
import Pickup from "./Pages/Dashboards/PickUp/Pickup";
import StaffRiders from "./Pages/Dashboards/Staffs/Staff";
import AddStaff from "./Pages/Dashboards/Staffs/AddStaff";
import StaffDetailsPages from "./Pages/Dashboards/Staffs/StaffDetailsPages";
import Payments from "./Pages/Dashboards/DashBoardHead/payments/Payment";

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

        <Route path="/dashboard" element={<Layout />}>
          <Route index element={<Overview />} />
          <Route path="orders" element={<Order />} />
          <Route path="pickup" element={<Pickup />} />
          <Route path="staff" element={<StaffRiders />} />
          <Route path="payments" element={<Payments />} />
          <Route path="staffdetailspage/:ids" element={<StaffDetailsPages />} />
          <Route path="addstaff" element={<AddStaff />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;