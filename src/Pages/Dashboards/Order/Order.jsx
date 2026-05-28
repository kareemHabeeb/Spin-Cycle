import React, { useState } from "react";
import "./Order.css";

const Order = () => {
  const [activeTab, setActiveTab] = useState("ALL ORDER");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const Tables = [
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Card",
      bookingDate: "9th March",
      deliveryDate: "11th March",
      deliveryMode: "Delivery",
      status: "New Request",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Transfer",
      bookingDate: "9th March",
      deliveryDate: "12th March",
      deliveryMode: "Delivery",
      status: "Completed",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Card",
      bookingDate: "9th March",
      deliveryDate: "11th March",
      deliveryMode: "Pick Up",
      status: "Completed",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Pos",
      bookingDate: "9th March",
      deliveryDate: "13th March",
      deliveryMode: "Pick Up",
      status: "In Progress",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Pos",
      bookingDate: "10th March",
      deliveryDate: "11th March",
      deliveryMode: "Delivery",
      status: "In Progress",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Transfer",
      bookingDate: "9th March",
      deliveryDate: "11th March",
      deliveryMode: "Delivery",
      status: "Completed",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Card",
      bookingDate: "10th March",
      deliveryDate: "12th March",
      deliveryMode: "Pick Up",
      status: "In Progress",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Card",
      bookingDate: "9th March",
      deliveryDate: "11th March",
      deliveryMode: "Pick Up",
      status: "Completed",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Pos",
      bookingDate: "9th March",
      deliveryDate: "11th March",
      deliveryMode: "Pick Up",
      status: "Completed",
    },
    {
      orderId: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      amount: "₦34,000",
      paymentMode: "Card",
      bookingDate: "10th March",
      deliveryDate: "11th March",
      deliveryMode: "Delivery",
      status: "Cancelled",
    },
  ];

  const tabs = [
    "ALL ORDER",
    "NEW REQUEST",
    "IN PROGRESS",
    "COMPLETED",
    "CANCELLED",
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case "New Request":
        return "status-new-request";
      case "In Progress":
        return "status-in-progress";
      case "Completed":
        return "status-completed";
      case "Cancelled":
        return "status-cancelled";
      default:
        return "";
    }
  };

  const filteredOrders =
    activeTab === "ALL ORDER"
      ? Tables
      : Tables.filter((order) => {
          if (activeTab === "NEW REQUEST")
            return order.status === "New Request";
          if (activeTab === "IN PROGRESS")
            return order.status === "In Progress";
          if (activeTab === "COMPLETED") return order.status === "Completed";
          if (activeTab === "CANCELLED") return order.status === "Cancelled";
          return true;
        });

  const totalPages = Math.ceil(filteredOrders.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedOrders = filteredOrders.slice(
    startIndex,
    startIndex + itemsPerPage,
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setCurrentPage(1);
  };

  const getPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
    return pages;
  };

  return (
    <div className="order-container">
      <div className="order-header">
        <div className="tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="table-wrapper">
        <table className="orders-table">
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
            {paginatedOrders.map((Tables, index) => (
              <tr key={index}>
                <td>{Tables.orderId}</td>
                <td>{Tables.address}</td>
                <td>{Tables.amount}</td>
                <td>{Tables.paymentMode}</td>
                <td>{Tables.bookingDate}</td>
                <td>{Tables.deliveryDate}</td>
                <td>{Tables.deliveryMode}</td>
                <td>
                  <span
                    className={`status-badge ${getStatusClass(Tables.status)}`}
                  >
                    {Tables.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <div className="pagination-info">
          Showing {startIndex + 1} of {filteredOrders.length}
        </div>
        <div className="pagination-controls">
          <button
            className="pagination-btn"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            ‹
          </button>
          {getPageNumbers().map((page) => (
            <button
              key={page}
              className={`pagination-number ${currentPage === page ? "active" : ""}`}
              onClick={() => handlePageChange(page)}
            >
              {page}
            </button>
          ))}
          <button
            className="pagination-btn"
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

export default Order;
