import React, { useState } from "react";
import "./Payments.css";
// import { FileDown } from "lucide-react";

const Payments = () => {
  const [activeTab, setActiveTab] = useState("All Payments");

  const tabs = ["All Payments", "Successful", "Pending", "Refunded"];

  const payments = [
    {
      id: "INV-2023-998A",
      mode: "Transfer",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
    {
      id: "INV-2023-998A",
      mode: "Pos",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
    {
      id: "INV-2023-998A",
      mode: "Pos",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
    {
      id: "INV-2023-998A",
      mode: "Transfer",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
    {
      id: "INV-2023-998A",
      mode: "Pos",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
    {
      id: "INV-2023-998A",
      mode: "Transfer",
      amount: "₦34,000",
      date: "11th March",
      status: "Successful",
    },
  ];

  return (
    <main className="paymentsContainer">
      <section className="paymentsHeader">
        <h1>PAYMENTS OVERVIEW</h1>

        <button className="exportBtn">
          {/* <FileDown size={20} /> */}
          Export
        </button>
      </section>

      <section className="paymentsTabs">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={activeTab === tab ? "activeTab" : "inactiveTab"}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </section>

      <section className="paymentsTable">
        <div className="tableHead">
          <p>Payment ID</p>
          <p>Payment Mode</p>
          <p>Amount</p>
          <p>Payment Date</p>
          <p>Status</p>
        </div>

        {payments.map((item, index) => (
          <div className="tableRow" key={index}>
            <p>{item.id}</p>
            <p>{item.mode}</p>
            <p>{item.amount}</p>
            <p>{item.date}</p>
            <p className="successStatus">{item.status}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Payments;
