import React, { useState } from "react";
import "../Staffs/Staff.css"
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";

const StaffRiders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const nav = useNavigate();
  const staffData = [
    {
      id: "#SC-2009-23",
      name: "Mr Fihan",
      position: "Driver",
      date: "12th Jan 2009",
      phone: "08134009500",
      status: "On Duty",
    },
    {
      id: "#SC-2009-24",
      name: "Mrs Akpan",
      position: "Receptionist",
      date: "15th April 2009",
      phone: "08134009500",
      status: "On Duty",
    },
    {
      id: "#SC-2008-25",
      name: "Mr Raheem",
      position: "Driver",
      date: "3rd Jan 2009",
      phone: "08134009600",
      status: "Off Duty",
    },
    {
      id: "#SC-2009-23",
      name: "Mr Fihan",
      position: "Driver",
      date: "12th Jan 2009",
      phone: "08134009500",
      status: "On Duty",
    },
  ];

  const itemsPerPage = 9;
  const totalPages = 3;

  const paginatedData = staffData.slice(0, itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="staff-container">
      <div className="staff-header">
        <div className="header-content">
          <h1>STAFF MANAGEMENT</h1>
          <p>SpinCycle Employees Dashboard</p>
        </div>
      </div>

      <div className="employees-section">
        <div className="employees-item">
          <span className="employees-item-title">32 EMPLOYEES</span>
        </div>
        <div className="stat-item">
          <span className="item-on-duty">20 Staff on duty</span>
        </div>
        <div className="stat-item">
          <span className="item-on-off-duty">12 Staff off duty</span>
        </div>

        <div className="button-holder">
          <button className="removeAdd-btn">
            Remove Staff <FaMinus />
          </button>
          <button className="removeAdd-btn">
            <FaPlus />
            Add New Staff
          </button>
        </div>
      </div>

      <div className="table-container">
        <table className="staff-table-holder">
          <thead>
            <tr>
              <th>Staff ID</th>
              <th>Name</th>
              <th>Position</th>
              <th>Employment Date</th>
              <th>Phone Number</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((staff, index) => (
              <tr key={index}>
                <td>{staff.id}</td>
                <td>{staff.name}</td>
                <td>{staff.position}</td>
                <td>{staff.date}</td>
                <td>{staff.phone}</td>
                <td>
                  <span
                    className={`status ${staff.status === "On Duty" ? "on-duty-badge" : "off-duty-badge"}`}
                  >
                    {staff.status}
                  </span>
                </td>
                <td>
                  <button
                    className="view-btn"
                    onClick={() => nav("/dashboard/staffdetailspages")}
                  >
                    View{" "}
                    <span className="eye-icon">
                      <FaEyeSlash />
                    </span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="number-section">
        <span className="text-info">Showing 1 of {totalPages}</span>
        <div className="number-holder">
          <button
            className="next-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              className={`next-btn ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="next-btn"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            ›
          </button>
        </div>
      </div>
    </div>
  );
};

export default StaffRiders;