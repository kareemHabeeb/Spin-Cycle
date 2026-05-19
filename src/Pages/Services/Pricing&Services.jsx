import React from "react";
import "./Pricing&Services.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Props/Button";
import Footer from "../../Components/Footer/Footer";
import { MdArrowCircleRight } from "react-icons/md";

const Pricing = () => {
  const CatText = [
    "Men",
    "Hotels",
    "Women",
    "restaurants",
    "Children",
    "Hospitals",
    "Hoouseholds",
    "Uniform",
  ];
  return (
    <main className="PricingContainer">
      <Header />
      <article className="SimplePricing">
        Simple Pricing <p>No hidden fees.</p>
      </article>
      <div className="QrCode">
        <article className="QrCodeWrapper">
          <section className="QrCode1">
            {CatText.map((item, index) => (
              <div key={index} className="QrCodeCategories">
                {item} <MdArrowCircleRight />
              </div>
            ))}
          </section>
          <section className="QrCode2">
            <nav>
              Bulk items(100)-one pickup a month, N70,000 50 items- 1 pick up a
              month, N35,000 Bulk items exclude bedsheets, jackets, suits,
              duvets.
            </nav>
            <nav>
              For our clients outside Lagos state, we offer a specialized
              delivery service with a 5 working-day turnaround. Please note that
              delivery fees vary based on your specific location.
            </nav>
          </section>
          <section className="QrCode3">
            <img src="src/assets/Frame 217.png" alt="" />
            <img src="src/assets/Frame 41.png" alt="" />
          </section>
        </article>
      </div>
      <div className="Services">
        <section className="ServiceSecLeft">
          <img
            className="ServicesTextImg"
            src="src/assets/Frame 127.png"
            alt=""
          />
          <div className="HomeBtnHolder2">
            <Button className="HomePickupBtn2" text="Schedule a pickup" />
            <Button className="HomePricingBtn2" text="See More Service" />
          </div>
        </section>
        <section className="ServiceSecRight">
          <img src="src/assets/unnamed 1.png" alt="" />
        </section>
      </div>
      <article className="LaundrySchedule">
        <section className="SheduleLeft">
          <nav>
            Laundry Pick-Up Schedule
            <span>Book a convenient time for us to collect your laundry</span>
          </nav>
          <div className="ScheduleInputHolder">
            <label>Full Name</label>
            <input
              placeholder="Kareem habeeb"
              type="text"
              name=""
              className="Scheduleinput"
            />
          </div>
          <div className="ScheduleInputHolder">
            <label>Email</label>
            <input
              placeholder="Kareem@gmail.com"
              type="text"
              name=""
              className="Scheduleinput"
            />
          </div>
          <div className="ScheduleInputHolder">
            <label>Phone number</label>
            <input
              placeholder="09032447478"
              type="text"
              name=""
              className="Scheduleinput"
            />
          </div>
        </section>
        <section className="scheduleRight">
          <div className="ScheduleInputRight">
            <label>Date Of Pickup</label>
            <input
              type="text"
              name=""
              className="Scheduleinput"
              placeholder="[ 12 May 2026 📅 ]"
            />
          </div>
          <div className="ScheduleInputRight2">
            <label>Preffered Time</label>
            <input
              type="text"
              name=""
              className="Scheduleinput2"
              placeholder="Morning (7:30am - 11:30am)"
            />
          </div>
          <div className="ScheduleInputRight3">
            <label>Leave a note</label>
            <input
              type="text"
              name=""
              className="Scheduleinput3"
              placeholder="I like starch in my clothes"
            />
          </div>
        </section>
      </article>

      <img className="Download" src="src/assets/dowload.png" alt="" />
      <Footer />
    </main>
  );
};

export default Pricing;
