import React, { useState } from "react";
import "./StaffsRidersStyles/AddStaff.css";
import { BsPeople } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const AddStaff = () => {
  const nav = useNavigate();
  const baseURL = import.meta.env.VITE_BASE_URL;
  const token = localStorage.getItem("token");

  const [staffData, setStaffData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    position: "",
    bscScience: "",
    schoolAttended: "",
    professionalCerts: "",
    guarantorFirstName: "",
    guarantorLastName: "",
    guarantorEmail: "",
    guarantorPhoneNumber: "",
    guarantorAddress: "",
    relationship: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^(\+234|0)[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStaffData({
      ...staffData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!staffData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }

    if (!staffData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }

    if (!staffData.address.trim()) {
      newErrors.address = "Address is required";
    }

    if (!staffData.position) {
      newErrors.position = "Position is required";
    }

    if (!staffData.phoneNumber) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(staffData.phoneNumber)) {
      newErrors.phoneNumber =
        "Please enter a valid phone number (e.g., 08012345678 or +2348012345678)";
    }

    if (!staffData.email) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(staffData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!staffData.bscScience) {
      newErrors.bscScience = "Qualification is required";
    }

    if (!staffData.schoolAttended) {
      newErrors.schoolAttended = "School attended is required";
    }

    if (!staffData.guarantorFirstName.trim()) {
      newErrors.guarantorFirstName = "Guarantor first name is required";
    }

    if (!staffData.guarantorLastName.trim()) {
      newErrors.guarantorLastName = "Guarantor last name is required";
    }

    if (!staffData.guarantorAddress.trim()) {
      newErrors.guarantorAddress = "Guarantor address is required";
    }

    if (!staffData.relationship) {
      newErrors.relationship = "Relationship is required";
    }

    if (!staffData.guarantorPhoneNumber) {
      newErrors.guarantorPhoneNumber = "Guarantor phone number is required";
    } else if (!validatePhoneNumber(staffData.guarantorPhoneNumber)) {
      newErrors.guarantorPhoneNumber = "Please enter a valid phone number";
    }

    if (!staffData.guarantorEmail) {
      newErrors.guarantorEmail = "Guarantor email is required";
    } else if (!validateEmail(staffData.guarantorEmail)) {
      newErrors.guarantorEmail = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };


  const handleClose = () => {
    nav(-1);
  };
  const handleSave = async () => {
    if (!validateForm()) {
      toast.error("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        `${baseURL}/api/staff/register`,
        {
          firstName: staffData.firstName,
          lastName: staffData.lastName,
          email: staffData.email,
          phoneNumber: staffData.phoneNumber,
          address: staffData.address,
          position: staffData.position.toLowerCase(),
          bscScience: staffData.bscScience,
          schoolAttended: staffData.schoolAttended,
          professionalCerts: staffData.professionalCerts,
          guarantorFirstName: staffData.guarantorFirstName,
          guarantorLastName: staffData.guarantorLastName,
          guarantorEmail: staffData.guarantorEmail,
          guarantorPhoneNumber: staffData.guarantorPhoneNumber,
          guarantorAddress: staffData.guarantorAddress,
          relationship: staffData.relationship.toLowerCase(),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log("staff form data api response", response);
      toast.success(response.data.message || "Staff added successfully!");

      setTimeout(() => {
        nav(-1);
      }, 1500);
    } catch (error) {
      console.error("Error saving staff:", error);
      toast.error(
        error.response?.data?.message ||
          "Failed to save staff. Please try again.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="AddStaff-container">
      <div className="AddStaff-header">
        <div className="sidetext">
          <h4>Staff</h4>
          <p>Add New Staff</p>
        </div>
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>
      </div>

      <div className="staff-id-container">
        <p>
          <BsPeople className="staff-icon" /> New Staff Registration
        </p>
      </div>

      <section className="content-container">
        <h2>PERSONAL INFORMATION</h2>
        <div className="details-holder">
          <div className="form-group">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="firstName"
              className={`form-input ${errors.firstName ? "error" : ""}`}
              value={staffData.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
            {errors.firstName && (
              <span className="error-text">{errors.firstName}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="lastName"
              className={`form-input ${errors.lastName ? "error" : ""}`}
              value={staffData.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
            {errors.lastName && (
              <span className="error-text">{errors.lastName}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label className="form-label">Address *</label>
            <input
              type="text"
              name="address"
              className={`form-input ${errors.address ? "error" : ""}`}
              value={staffData.address}
              onChange={handleChange}
              placeholder="Enter address"
            />
            {errors.address && (
              <span className="error-text">{errors.address}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Position *</label>
            <select
              name="position"
              className={`form-input ${errors.position ? "error" : ""}`}
              value={staffData.position}
              onChange={handleChange}
            >
              <option value="">Select Position</option>
              <option value="driver">Driver</option>
              <option value="receptionist">Receptionist</option>
              <option value="manager">Manager</option>
              <option value="staff">Staff</option>
              <option value="rider">Rider</option>
            </select>
            {errors.position && (
              <span className="error-text">{errors.position}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              name="phoneNumber"
              className={`form-input ${errors.phoneNumber ? "error" : ""}`}
              value={staffData.phoneNumber}
              onChange={handleChange}
              placeholder="e.g., 08012345678 or +2348012345678"
            />
            {errors.phoneNumber && (
              <span className="error-text">{errors.phoneNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="email"
              className={`form-input ${errors.email ? "error" : ""}`}
              value={staffData.email}
              onChange={handleChange}
              placeholder="Enter email address"
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>
      </section>

      <section className="content-container">
        <h2>EDUCATION AND CREDENTIALS</h2>
        <div className="details-holder">
          <div className="form-group full-width">
            <label className="form-label">Qualification (BSc Science) *</label>
            <input
              type="text"
              name="bscScience"
              className={`form-input ${errors.bscScience ? "error" : ""}`}
              value={staffData.bscScience}
              onChange={handleChange}
              placeholder="e.g., BSc Computer Science"
            />
            {errors.bscScience && (
              <span className="error-text">{errors.bscScience}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label className="form-label">School Attended *</label>
            <input
              type="text"
              name="schoolAttended"
              className={`form-input ${errors.schoolAttended ? "error" : ""}`}
              value={staffData.schoolAttended}
              onChange={handleChange}
              placeholder="Enter school name"
            />
            {errors.schoolAttended && (
              <span className="error-text">{errors.schoolAttended}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label className="form-label">Professional Certifications</label>
            <input
              type="text"
              name="professionalCerts"
              className="form-input"
              value={staffData.professionalCerts}
              onChange={handleChange}
              placeholder="Enter professional certifications (optional)"
            />
          </div>
        </div>
      </section>

      <section className="content-container">
        <h2>GUARANTOR INFORMATION</h2>
        <div className="details-holder">
          <div className="form-group">
            <label className="form-label">First Name *</label>
            <input
              type="text"
              name="guarantorFirstName"
              className={`form-input ${errors.guarantorFirstName ? "error" : ""}`}
              value={staffData.guarantorFirstName}
              onChange={handleChange}
              placeholder="Guarantor first name"
            />
            {errors.guarantorFirstName && (
              <span className="error-text">{errors.guarantorFirstName}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Last Name *</label>
            <input
              type="text"
              name="guarantorLastName"
              className={`form-input ${errors.guarantorLastName ? "error" : ""}`}
              value={staffData.guarantorLastName}
              onChange={handleChange}
              placeholder="Guarantor last name"
            />
            {errors.guarantorLastName && (
              <span className="error-text">{errors.guarantorLastName}</span>
            )}
          </div>

          <div className="form-group full-width">
            <label className="form-label">Address *</label>
            <input
              type="text"
              name="guarantorAddress"
              className={`form-input ${errors.guarantorAddress ? "error" : ""}`}
              value={staffData.guarantorAddress}
              onChange={handleChange}
              placeholder="Guarantor address"
            />
            {errors.guarantorAddress && (
              <span className="error-text">{errors.guarantorAddress}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Relationship *</label>
            <select
              name="relationship"
              className={`form-input ${errors.relationship ? "error" : ""}`}
              value={staffData.relationship}
              onChange={handleChange}
            >
              <option value="">Select Relationship</option>
              <option value="father">Father</option>
              <option value="mother">Mother</option>
              <option value="brother">Brother</option>
              <option value="sister">Sister</option>
              <option value="spouse">Spouse</option>
              <option value="friend">Friend</option>
            </select>
            {errors.relationship && (
              <span className="error-text">{errors.relationship}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number *</label>
            <input
              type="tel"
              name="guarantorPhoneNumber"
              className={`form-input ${errors.guarantorPhoneNumber ? "error" : ""}`}
              value={staffData.guarantorPhoneNumber}
              onChange={handleChange}
              placeholder="e.g., 08012345678 or +2348012345678"
            />
            {errors.guarantorPhoneNumber && (
              <span className="error-text">{errors.guarantorPhoneNumber}</span>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email *</label>
            <input
              type="email"
              name="guarantorEmail"
              className={`form-input ${errors.guarantorEmail ? "error" : ""}`}
              value={staffData.guarantorEmail}
              onChange={handleChange}
              placeholder="Guarantor email"
            />
            {errors.guarantorEmail && (
              <span className="error-text">{errors.guarantorEmail}</span>
            )}
          </div>
        </div>
      </section>

      <div className="save-button-container">
        <button className="save-btn" onClick={handleSave} disabled={loading}>
          {loading ? "Saving..." : "Save Staff"}
        </button>
      </div>
    </div>
  );
};

export default AddStaff;