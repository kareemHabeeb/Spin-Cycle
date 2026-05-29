import React, { useState, useEffect } from "react";
import "./StaffsRidersStyles/StaffDetailsPages.css";
import { BsPeople } from "react-icons/bs";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const StaffDetailsPages = () => {
  const nav = useNavigate();
  const { ids } = useParams();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const location = useLocation();
  const [staffData, setStaffData] = useState(null);
  const [loading, setLoading] = useState(true);

  const isValidObjectId = (id) =>
    typeof id === "string" && /^[0-9a-fA-F]{24}$/.test(id);

  const fetchStaffDetails = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${baseURL}/api/staff/staffs/${ids}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Staff details response:", response.data);

      const staff = response.data.data || response.data;
      setStaffData(staff);
    } catch (error) {
      console.error("Error fetching staff details:", error);
      toast.error(
        error.response?.data?.message || "Failed to load staff details",
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!ids) {
      setLoading(false);
      return;
    }

    if (!isValidObjectId(ids)) {
      const staffFromState = location.state?.staff;
      if (staffFromState) {
        setStaffData(staffFromState);
        setLoading(false);
        return;
      }

      toast.error("Invalid staff id provided");
      setLoading(false);
      return;
    }

    fetchStaffDetails();
  }, [ids, location.state]);

  const handleClose = () => {
    nav(-1);
  };

  if (loading) {
    return (
      <div className="staff-details-container">
        <div className="loading-state">Loading staff information...</div>
      </div>
    );
  }

  if (!staffData) {
    return (
      <div className="staff-details-container">
        <div className="empty-state">Staff not found</div>
      </div>
    );
  }

  return (
    <div className="staff-details-container">
      <div className="staff-header">
        <div className="staff-details-sidetext">
          <h3>Staff</h3>
          <span>Mr {staffData.PERSONAL_INFO?.firstName || ""}</span>
        </div>
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>
      </div>

      <div className="staffid-holder">
        <p>
          <BsPeople className="staff-icon" />
          {staffData.staffId || ids || "N/A"}
        </p>
        <button className="print-btn">Print</button>
      </div>

      <section className="personal-details-section">
        <h2>PERSONAL INFORMATION</h2>
        <div className="details-inforholder">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.firstName || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.lastName || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.address || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Position</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.position || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.phoneNumber || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-input"
              value={staffData.PERSONAL_INFO?.email || ""}
              readOnly
            />
          </div>
        </div>
      </section>

      <section className="personal-details-section">
        <h2>EDUCATION AND CREDENTIALS</h2>
        <div className="details-inforholder">
          <div className="form-group">
            <label className="form-label">Qualification</label>
            <input
              type="text"
              className="form-input"
              value={staffData.EDUCATION_CREDENTIALS?.bscScience || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">School Attended</label>
            <input
              type="text"
              className="form-input"
              value={staffData.EDUCATION_CREDENTIALS?.schoolAttended || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Professional Certification</label>
            <input
              type="text"
              className="form-input"
              value={staffData.EDUCATION_CREDENTIALS?.professionalCerts || ""}
              readOnly
            />
          </div>
        </div>
      </section>

      <section className="personal-details-section">
        <h2>GUARANTOR INFORMATION</h2>
        <div className="details-inforholder">
          <div className="form-group">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.firstName || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.lastName || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.address || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Relationship</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.relationship || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.phoneNumber || ""}
              readOnly
            />
          </div>
          <div className="form-group">
            <label className="form-label">Email</label>
            <input
              type="text"
              className="form-input"
              value={staffData.GUARANTOR_INFO?.email || ""}
              readOnly
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default StaffDetailsPages;