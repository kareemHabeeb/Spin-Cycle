import React, { useState } from "react";
import axios from "axios";
import "./Business.css";
import Header from "../../Components/Header/Header";

const initialState = {
  firstName: "",
  lastName: "",
  pickUpDate: "",
  pickUpTime: "",
  email: "",
  address: "",
  phoneNumber: "",
  deliveryMode: "",
  paymentMode: "",
  item: "",
  specification: "",
  quantity: 0,
  amount: 0,
  note: "",
};

const Business = () => {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  // Handle all inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" || name === "amount" ? Number(value) : value,
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData(initialState);
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      const response = await axios.post(
        `${baseUrl}/api/order/create-order`,
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      console.log(response.data);

      alert("Laundry scheduled successfully!");

      resetForm();
    } catch (error) {
      console.error("Submission Error:", error);

      if (error.response) {
        console.log(error.response.data);
      }

      alert("Something went wrong while submitting");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />

      <form className="page-container" onSubmit={handleSubmit}>
        <div className="form-section">
          <h1>Schedule Your Laundry Service</h1>

          {/* Customer Information */}
          <div className="card">
            <h2>Customer Information</h2>

            <div className="grid-2">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
              />

              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
              />
            </div>

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
            />

            <input
              type="tel"
              name="phoneNumber"
              placeholder="Phone Number"
              value={formData.phoneNumber}
              onChange={handleChange}
            />

            <textarea
              name="address"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>

          {/* Pickup & Delivery */}
          <div className="card">
            <h2>Pickup & Delivery</h2>

            <div className="grid-2">
              <input
                type="date"
                name="pickUpDate"
                value={formData.pickUpDate}
                onChange={handleChange}
              />

              <input
                type="time"
                name="pickUpTime"
                value={formData.pickUpTime}
                onChange={handleChange}
              />
            </div>

            <select
              name="deliveryMode"
              value={formData.deliveryMode}
              onChange={handleChange}
              className="select-input"
            >
              <option value="">Select Delivery Mode</option>
              <option value="pickup">Pickup</option>
              <option value="delivery">Delivery</option>
            </select>
          </div>

          {/* Laundry Item */}
          <div className="card">
            <h2>Laundry Details</h2>

            <input
              type="text"
              name="item"
              placeholder="Laundry Item"
              value={formData.item}
              onChange={handleChange}
            />

            <input
              type="text"
              name="specification"
              placeholder="Specification"
              value={formData.specification}
              onChange={handleChange}
            />

            <div className="grid-2">
              <input
                type="number"
                name="quantity"
                placeholder="Quantity"
                value={formData.quantity}
                onChange={handleChange}
              />

              <input
                type="number"
                name="amount"
                placeholder="Amount"
                value={formData.amount}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Payment */}
          <div className="card">
            <h2>Payment Information</h2>

            <select
              name="paymentMode"
              value={formData.paymentMode}
              onChange={handleChange}
              className="select-input"
            >
              <option value="">Select Payment Method</option>
              <option value="transfer">Transfer</option>
              <option value="cash">Cash</option>
            </select>
          </div>

          {/* Notes */}
          <div className="card">
            <h2>Additional Notes</h2>

            <textarea
              name="note"
              placeholder="Special washing instructions or delivery details..."
              value={formData.note}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="primary-btn" disabled={loading}>
              {loading ? "Submitting..." : "Schedule Laundry"}
            </button>

            <button type="button" className="reset-btn" onClick={resetForm}>
              Reset Form
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="summary-section">
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-item">
              <span>{formData.item || "Item"}</span>

              <span>
                {formData.quantity} × ₦{formData.amount}
              </span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total</strong>

              <strong>₦{formData.quantity * formData.amount}</strong>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Business;
