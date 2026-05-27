import React from "react";
import "./Staff.css";
// import { EyeOff } from "lucide-react";

const StaffRiders = () => {
  const staffs = [
    {
      id: "#SC-2009-23",
      name: "Mr Fihan",
      position: "Driver",
      date: "12th Jan 2009",
      phone: "08134009500",
      status: "On Duty",
    },
    {
      id: "#SC-2009-24",
      name: "Mrs Akpan",
      position: "Receptionist",
      date: "15th April 2009",
      phone: "08134009500",
      status: "On Duty",
    },
    {
      id: "#SC-2009-25",
      name: "Mr Raheem",
      position: "Driver",
      date: "3rd Jan 2009",
      phone: "08134009600",
      status: "Off Duty",
    },
    {
      id: "#SC-2009-23",
      name: "Mr Fihan",
      position: "Driver",
      date: "12th Jan 2009",
      phone: "08134009500",
      status: "On Duty",
    },
    {
      id: "#SC-2009-25",
      name: "Mrs Akpan",
      position: "Receptionist",
      date: "15th April 2009",
      phone: "08134009500",
      status: "On Duty",
    },
  ];

  return (
    <main className="staffContainer">
      <section className="staffHeader">
        <div>
          <h1>STAFF MANAGEMENT</h1>
          <p>SpinCycle Employees</p>
        </div>

        <div className="staffActions">
          <button className="removeBtn">
            Remove Staff <span>—</span>
          </button>

          <button className="addBtn">
            Add New Staff <span>+</span>
          </button>
        </div>
      </section>

      <section className="staffStats">
        <h3>32 EMPLOYEES</h3>
        <p className="onDuty">20 Staff on duty</p>
        <p className="offDuty">12 Staff off duty</p>
      </section>

      <section className="staffTable">
        <div className="tableHead">
          <p>Staff ID</p>
          <p>Name</p>
          <p>Position</p>
          <p>Employment Date</p>
          <p>Phone Number</p>
          <p>Status</p>
          <p>Action</p>
        </div>

        {staffs.map((staff, index) => (
          <div className="tableRow" key={index}>
            <p>{staff.id}</p>
            <p>{staff.name}</p>
            <p>{staff.position}</p>
            <p>{staff.date}</p>
            <p>{staff.phone}</p>

            <p
              className={staff.status === "On Duty" ? "statusOn" : "statusOff"}
            >
              {staff.status}
            </p>

            <button className="viewBtn">
              View
              {/* <EyeOff size={16} /> */}
            </button>
          </div>
        ))}
      </section>
    </main>
  );
};

export default StaffRiders;
