import React from "react";
import "./OrderSchedule.css";
import { Orders } from "../../../Data/MenuData";

const OrderTable = () => {
  return (
    <div className="table-container">
      <table className="order-table">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Amount</th>
            <th>Payment Mode</th>
            <th>Booking Date</th>
            <th>Delivery/Pickup Date</th>
            <th>Delivery Mode</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {Orders.map((order, index) => (
            <tr key={index}>
              <td>{order.id}</td>
              <td>{order.amount}</td>
              <td>{order.payment}</td>
              <td>{order.bookingDate}</td>
              <td>{order.deliveryDate}</td>
              <td>{order.deliveryMode}</td>

              <td>
                <span className={`status ${order.statusClass}`}>
                  {order.status}
                </span>
              </td>

              <td>
                <div className="action-buttons">
                  <button className="view-btn">View</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;
