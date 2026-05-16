import React from "react";
import "./Pricing&Services.css";
import Header from "../../Components/Header/Header";
import Button from "../../Components/Props/Button";
import Footer from "../../Components/Footer/Footer";

const Pricing = () => {
  return (
    <main className="PricingContainer">
      <Header />
      <article className="SimplePricing">
        Simple Pricing <p>No hidden fees.</p>
      </article>
      <img className="QrCode" src="src/assets/SECT.png" alt="" />
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
      <img className="LaundrySchedule" src="src/assets/form.png" alt="" />
      <img className="Download" src="src/assets/dowload.png" alt="" />
      <Footer />
    </main>
  );
};

export default Pricing;
