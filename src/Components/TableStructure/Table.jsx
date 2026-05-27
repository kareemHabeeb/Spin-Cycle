import React from "react";
import { Tables } from "../../Data/MenuData";

const getStatusClass = (status) => {
  switch (status) {
    case "Completed":
      return "completed";
    case "In Progress":
      return "progress";
    case "Cancelled":
      return "cancelled";
    case "New Request":
      return "new";
    default:
      return "";
  }
};

const Table = () => {
  return (
    <div className="table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Address</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Booking Date</th>
            <th>Delivery/Pickup Date</th>
            <th>Delivery Mode</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {Tables.map((Tables, index) => (
            <tr key={index}>
              <td>{Tables.orderId}</td>
              <td>{Tables.address}</td>
              <td>{Tables.amount}</td>
              <td>{Tables.paymentMode}</td>
              <td>{Tables.bookingDate}</td>
              <td>{Tables.deliveryDate}</td>
              <td>{Tables.deliveryMode}</td>
              <td className={getStatusClass(Tables.status)}>{Tables.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
