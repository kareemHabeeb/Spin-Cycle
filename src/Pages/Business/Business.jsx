import React from "react";
import "./Business.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Props/Button";

const Business = () => {
  return (
    <main>
      <Header />
      <div className="page-container">
        <div className="form-section">
          <h1>Schedule Your Laundry Service</h1>

          <div className="card">
            <h2>Customer Information</h2>

            <div className="grid-2">
              <input type="text" placeholder="First Name" />
              <input type="text" placeholder="Last Name" />
            </div>

            <input type="email" placeholder="Email Address" />
            <input type="tel" placeholder="Phone Number" />
            <textarea placeholder="Address"></textarea>
          </div>

          <div className="card">
            <h2>Pickup & Delivery</h2>

            <div className="grid-2">
              <input type="date" />
              <input type="time" />
            </div>

            <div className="option-group">
              <Button className="option-btn" text="Pickup" />
              <Button className="option-btn" text="Delivery" />
            </div>
          </div>

          <div className="card">
            <h2>Laundry Items</h2>

            <div className="item-row">
              <input type="text" placeholder="Item" />
              <input type="number" placeholder="Quantity" />
              <input type="number" placeholder="Amount" />
            </div>

            <div className="item-row">
              <input type="text" placeholder="Item" />
              <input type="number" placeholder="Quantity" />
              <input type="number" placeholder="Amount" />
            </div>

            <button className="secondary-btn">+ Add Another Item</button>
          </div>

          <div className="card">
            <h2>Payment Information</h2>

            <div className="option-group">
              <Button className="option-btn" text="Transfer" />
              <Button className="option-btn" text="Cash" />
            </div>
          </div>

          <div className="card">
            <h2>Additional Notes</h2>

            <textarea placeholder="Special washing instructions or delivery details..."></textarea>
          </div>

          <div className="button-group">
            <button className="primary-btn">Schedule Laundry</button>
            <button className="reset-btn">Reset Form</button>
          </div>
        </div>

        <div className="summary-section">
          <div className="summary-card">
            <h2>Order Summary</h2>

            <div className="summary-item">
              <span>Shirts</span>
              <span>2 × $10</span>
            </div>

            <div className="summary-item">
              <span>Trousers</span>
              <span>1 × $15</span>
            </div>

            <hr />

            <div className="summary-total">
              <strong>Total</strong>
              <strong>$35</strong>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Business;
