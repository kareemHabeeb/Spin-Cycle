import React from "react";
import "./Pickup.css";

const Pickup = () => {
  const schedules = [
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "11th March",
      mode: "Delivery",
      status: "Completed",
      time: "12:00pm",
      staff: "Mr John",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "12th March",
      mode: "Delivery",
      status: "Completed",
      time: "10:00am",
      staff: "Mr Fihan",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "11th March",
      mode: "Pick Up",
      status: "Completed",
      time: "11:30am",
      staff: "Miss Blessing",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "13th March",
      mode: "Pick Up",
      status: "Completed",
      time: "2:00pm",
      staff: "Mrs Akpan",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "11th March",
      mode: "Delivery",
      status: "Completed",
      time: "2:00pm",
      staff: "Mr Samuel",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "11th March",
      mode: "Pick Up",
      status: "Completed",
      time: "11:30am",
      staff: "Miss Blessing",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "13th March",
      mode: "Pick Up",
      status: "Completed",
      time: "2:00pm",
      staff: "Mrs Akpan",
    },
    {
      id: "#SC7800736",
      address: "12, Ladejobi Ipaja",
      date: "11th March",
      mode: "Delivery",
      status: "Completed",
      time: "2:00pm",
      staff: "Mr Samuel",
    },
  ];

  return (
    <main className="pickupSchedule">
      <div className="scheduleHeader">
        <h2>Pickup/Delivery Schedule</h2>

        <button className="assignBtn">ASSIGN STAFF</button>
      </div>

      <div className="scheduleTable">
        <div className="tableHead">
          <p>Order ID</p>
          <p>Address</p>
          <p>Delivery/Pickup Date</p>
          <p>Delivery Mode</p>
          <p>Status</p>
          <p>Time</p>
          <p>Assigned Staff or Driver</p>
        </div>

        {schedules.map((item, index) => (
          <div className="tableRow" key={index}>
            <p>{item.id}</p>
            <p>{item.address}</p>
            <p>{item.date}</p>
            <p>{item.mode}</p>
            <p className="status">{item.status}</p>
            <p>{item.time}</p>
            <p>{item.staff}</p>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Pickup;
