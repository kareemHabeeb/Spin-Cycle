import React from "react";
import Header from "../../Components/Header/Header";
import "./Home.css";
import Button from "../../Components/Props/Button";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <main className="HomeContainer">
      <Header />
      <article className="HomeWrapper">
        <img className="bubbles" src="src/assets/Vector (2).png" alt="" />
        <section className="HomeTopSecLeft">
          <img
            className="smartText"
            src="src/assets/Smart laundry, Precision Cleaning with 48hrs delivery.png"
            alt=""
          />
          <nav className="BelowSmartText">
            At SpinCycle Laundry, we combine expert garment care with modern
            efficiency to give your clothes the attention they deserve. From
            delicate fabrics to everyday essentials, each item is handled with
            precision, quality products, and industry-standard processes.
          </nav>
          <img className="iconsImg" src="src/assets/Frame 89.png" alt="" />
          <div className="HomeBtnHolder">
            <Button className="HomePickupBtn" text="Schedule a pickup" />
            <Button className="HomePricingBtn" text="View Pricing" />
          </div>
        </section>
        <section>
          <img src="src/assets/spincycle png 1.png" alt="" />
        </section>
      </article>

      <img className="WhatWeDo" src="src/assets/what we do.png" alt="" />

      <img className="PrecisionCare" src="src/assets/fabric types.png" alt="" />

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
      <img className="ScheduleImg" src="src/assets/schedule.png" alt="" />
      <article className="ItemsCleaned">
        <img src="src/assets/light blue.png" alt="" />
      </article>
      <img className="Download" src="src/assets/dowload.png" alt="" />
      <Footer />
    </main>
  );
};

export default Home;
