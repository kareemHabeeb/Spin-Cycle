import React, { useState, useEffect } from "react";
import "./StaffsRidersStyles/Staff.css";
import { useNavigate } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa";
import { FaMinus, FaPlus } from "react-icons/fa6";
import axios from "axios";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

const StaffRiders = () => {
  const [staffData, setStaffData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [totalStaff, setTotalStaff] = useState(0);
  const [onDuty, setOnDuty] = useState(0);
  const [offDuty, setOffDuty] = useState(0);

  const { ids } = useParams();

  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const fetchStaffData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/api/staff/staffs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Staff data response:", response.data);

      const staffList = response.data.data || [];

      const staffWithIds = staffList.map((staff, index) => ({
        ...staff,
        displayId: `#SC-${String(index + 1).padStart(4, "0")}`,
        displayStatus: index % 2 === 0 ? "On Duty" : "Off Duty",
      }));

      setStaffData(staffWithIds);
      setTotalStaff(staffWithIds.length);

      const onDutyCount = staffWithIds.filter(
        (staff) => staff.displayStatus === "On Duty",
      ).length;
      const offDutyCount = staffWithIds.length - onDutyCount;

      setOnDuty(onDutyCount);
      setOffDuty(offDutyCount);
    } catch (error) {
      console.error("Error fetching staff:", error);
      toast.error(error.response?.data?.message || "Failed to load staff data");
      setStaffData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStaffData();
  }, []);

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
          <span className="employees-item-title">{totalStaff} EMPLOYEES</span>
        </div>
        <div className="stat-item">
          <span className="item-on-duty">{onDuty} Staff on duty</span>
        </div>
        <div className="stat-item">
          <span className="item-on-off-duty">{offDuty} Staff off duty</span>
        </div>

        <div className="button-holder">
          <button className="removeAdd-btn" disabled>
            Remove Staff <FaMinus />
          </button>
          <button
            className="removeAdd-btn"
            onClick={() => nav("/dashboard/addstaff")}
          >
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
            {loading ? (
              <tr>
                <td colSpan="7" className="loading-state">
                  Loading staff data...
                </td>
              </tr>
            ) : staffData.length === 0 ? (
              <tr>
                <td colSpan="7" className="empty-state">
                  <div>👥</div>
                  <h3>No Staff Found</h3>
                  <p>You haven't added any staff members yet.</p>
                  <button
                    className="removeAdd-btn"
                    onClick={() => nav("/dashboard/addstaff")}
                  >
                    <FaPlus /> Add Your First Staff
                  </button>
                </td>
              </tr>
            ) : (
              staffData.map((staff, index) => (
                <tr key={staff._id || index}>
                  <td>{staff.displayId}</td>
                  <td>
                    {staff.PERSONAL_INFO?.firstName || ""}{" "}
                    {staff.PERSONAL_INFO?.lastName || ""}
                  </td>
                  <td>{staff.PERSONAL_INFO?.position || "-"}</td>
                  <td>-</td>
                  <td>{staff.PERSONAL_INFO?.phoneNumber || "-"}</td>
                  <td>
                    <span
                      className={`status ${staff.displayStatus === "On Duty" ? "on-duty-badge" : "off-duty-badge"}`}
                    >
                      {staff.displayStatus}
                    </span>
                  </td>
                  <td>
                    <button
                      className="view-btn"
                      onClick={() => {
                        const id = staff._id;
                        const isObjectId =
                          typeof id === "string" &&
                          /^[0-9a-fA-F]{24}$/.test(id);
                        if (isObjectId) {
                          nav(`/dashboard/staffdetailspage/${id}`);
                        } else {
                          nav(`/dashboard/staffdetailspage/local-${index}`, {
                            state: { staff },
                          });
                        }
                      }}
                    >
                      View
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StaffRiders;