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
      <article className="What">
        <img className="BigCircles1" src="src/assets/Vector (3).png" alt="" />
        <img className="BigCircles2" src="src/assets/Vector (3).png" alt="" />
        <section className="WhatWeDOLeft">
          <nav>Who we are</nav>
          <span>
            From garment care, <br />
            to stain removal, to deep washing— <br />
            we handle it all.
          </span>a
          <p>
            We provide expert garment care with precision and professionalism.
            From everyday laundry and delicate fabric handling to dry cleaning
            and advanced stain removal, SpinCycle Laundry ensures your clothes
            are cleaned, treated, and finished to the highest standard —
            delivering freshness, quality, and excellence every time.
          </p>
          <img className="plus" src="src/assets/Frame 102.png" alt="" />
        </section>
        <section className="WhatWeDORight">
          <img src="src/assets/Frame 98.png" alt="" />
        </section>
      </article>
      <div className="Precision">
        <article className="PrecisionWrapper">
          <section className="PrecisionLeft">
            <nav>
              Precision Care, Longer
              <br /> Wear for all kinds of
              <br /> garments
            </nav>
            <span>
              Extending the life of your wardrobe starts with the right
              settings. From high-performance activewear to everyday cotton,
              we’ve mastered the art of the custom wash. Our intelligent cycles
              are specifically tailored to your fabric types, helping to reduce
              waste and keep your clothes looking new for years to come.
            </span>
            <img src="src/assets/Frame 121.png" alt="" />
          </section>

          <img
            className="PrecisionRight"
            src="src/assets/Frame 116.png"
            alt=""
          />
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
