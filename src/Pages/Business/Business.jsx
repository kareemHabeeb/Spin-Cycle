// import React from "react";
// import "./Business.css";
// import Header from "../../Components/Header/Header";
// import Button from "../../Components/Props/Button";

// const Business = () => {

//   return (
//     <main>
//       <Header />
//       <div className="page-container">
//         <div className="form-section">
//           <h1>Schedule Your Laundry Service</h1>

//           <div className="card">
//             <h2>Customer Information</h2>

//             <div className="grid-2">
//               <input type="text" placeholder="First Name" />
//               <input type="text" placeholder="Last Name" />
//             </div>

//             <input type="email" placeholder="Email Address" />
//             <input type="tel" placeholder="Phone Number" />
//             <textarea placeholder="Address"></textarea>
//           </div>

//           <div className="card">
//             <h2>Pickup & Delivery</h2>

//             <div className="grid-2">
//               <input type="date" />
//               <input type="time" />
//             </div>

//             <div className="option-group">
//               <Button className="option-btn" text="Pickup" />
//               <Button className="option-btn" text="Delivery" />
//             </div>
//           </div>

//           <div className="card">
//             <h2>Laundry Items</h2>

//             <div className="item-row">
//               <input type="text" placeholder="Item" />
//               <input type="number" placeholder="Quantity" />
//               <input type="number" placeholder="Amount" />
//             </div>

//             <div className="item-row">
//               <input type="text" placeholder="Item" />
//               <input type="number" placeholder="Quantity" />
//               <input type="number" placeholder="Amount" />
//             </div>

//             <button className="secondary-btn">+ Add Another Item</button>
//           </div>

//           <div className="card">
//             <h2>Payment Information</h2>

//             <div className="option-group">
//               <Button className="option-btn" text="Transfer" />
//               <Button className="option-btn" text="Cash" />
//             </div>
//           </div>

//           <div className="card">
//             <h2>Additional Notes</h2>

//             <textarea placeholder="Special washing instructions or delivery details..."></textarea>
//           </div>

//           <div className="button-group">
//             <button className="primary-btn">Schedule Laundry</button>
//             <button className="reset-btn">Reset Form</button>
//           </div>
//         </div>

//         <div className="summary-section">
//           <div className="summary-card">
//             <h2>Order Summary</h2>

//             <div className="summary-item">
//               <span>Shirts</span>
//               <span>2 × $10</span>
//             </div>

//             <div className="summary-item">
//               <span>Trousers</span>
//               <span>1 × $15</span>
//             </div>

//             <hr />

//             <div className="summary-total">
//               <strong>Total</strong>
//               <strong>$35</strong>
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Business;

import React, { useEffect, useState } from "react";
import "./Business.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Props/Button";

const Business = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    date: "",
    time: "",
    serviceType: "Pickup",
    paymentMethod: "Transfer",
    notes: "",
    items: [
      {
        item: "",
        quantity: 1,
        amount: 0,
      },
    ],
  };

  // Load from localStorage if available
  const [formData, setFormData] = useState(() => {
    const savedData = localStorage.getItem("laundryForm");

    return savedData ? JSON.parse(savedData) : initialState;
  });

  // Save to localStorage whenever form changes
  useEffect(() => {
    localStorage.setItem("laundryForm", JSON.stringify(formData));
  }, [formData]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle laundry items change
  const handleItemChange = (index, field, value) => {
    const updatedItems = [...formData.items];

    updatedItems[index][field] = value;

    setFormData((prev) => ({
      ...prev,
      items: updatedItems,
    }));
  };

  // Add another laundry item
  const addItem = () => {
    setFormData((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          item: "",
          quantity: 1,
          amount: 0,
        },
      ],
    }));
  };

  // Reset form
  const resetForm = () => {
    setFormData(initialState);
    localStorage.removeItem("laundryForm");
  };

  // Submit form
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submitted Data:", formData);

    alert("Laundry service scheduled successfully!");
  };

  // Calculate total
  const total = formData.items.reduce((acc, item) => {
    return acc + Number(item.quantity) * Number(item.amount);
  }, 0);

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
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
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
                name="date"
                value={formData.date}
                onChange={handleChange}
              />

              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
              />
            </div>

            <div className="option-group">
              <Button
                type="button"
                className={`option-btn ${
                  formData.serviceType === "Pickup" ? "active" : ""
                }`}
                text="Pickup"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: "Pickup",
                  }))
                }
              />

              <Button
                type="button"
                className={`option-btn ${
                  formData.serviceType === "Delivery" ? "active" : ""
                }`}
                text="Delivery"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    serviceType: "Delivery",
                  }))
                }
              />
            </div>
          </div>

          {/* Laundry Items */}
          <div className="card">
            <h2>Laundry Items</h2>

            {formData.items.map((item, index) => (
              <div className="item-row" key={index}>
                <input
                  type="text"
                  placeholder="Item"
                  value={item.item}
                  onChange={(e) =>
                    handleItemChange(index, "item", e.target.value)
                  }
                />

                <input
                  type="number"
                  placeholder="Quantity"
                  value={item.quantity}
                  onChange={(e) =>
                    handleItemChange(index, "quantity", e.target.value)
                  }
                />

                <input
                  type="number"
                  placeholder="Amount"
                  value={item.amount}
                  onChange={(e) =>
                    handleItemChange(index, "amount", e.target.value)
                  }
                />
              </div>
            ))}

            <button type="button" className="secondary-btn" onClick={addItem}>
              + Add Another Item
            </button>
          </div>

          {/* Payment */}
          <div className="card">
            <h2>Payment Information</h2>

            <div className="option-group">
              <Button
                type="button"
                className={`option-btn ${
                  formData.paymentMethod === "Transfer" ? "active" : ""
                }`}
                text="Transfer"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    paymentMethod: "Transfer",
                  }))
                }
              />

              <Button
                type="button"
                className={`option-btn ${
                  formData.paymentMethod === "Cash" ? "active" : ""
                }`}
                text="Cash"
                onClick={() =>
                  setFormData((prev) => ({
                    ...prev,
                    paymentMethod: "Cash",
                  }))
                }
              />
            </div>
          </div>

          {/* Notes */}
          <div className="card">
            <h2>Additional Notes</h2>

            <textarea
              name="notes"
              placeholder="Special washing instructions or delivery details..."
              value={formData.notes}
              onChange={handleChange}
            />
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="primary-btn">
              Schedule Laundry
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

            {formData.items.map((item, index) => (
              <div className="summary-item" key={index}>
                <span>{item.item || "Item"}</span>

                <span>
                  {item.quantity} × ${item.amount}
                </span>
              </div>
            ))}

            <hr />

            <div className="summary-total">
              <strong>Total</strong>
              <strong>${total}</strong>
            </div>
          </div>
        </div>
      </form>
    </main>
  );
};

export default Business;
