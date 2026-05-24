import React from "react";
import "./Overview.css";
import Head from "../DashBoardHead/Head";
import Menu from "../Dashboardmenu/Menu";
import { OrderProcess } from "../../../Data/MenuData";
import Button from "../../../Components/Props/Button";
import OrderSchedule from "../../../Components/Header/OrderSchedules/OrderSchedule";

const Overview = () => {
  return (
    <main className="Overview">
      <Head />
      <article className="OverviewWrapper">
        <Menu />
        <div className="OverviewCotent">
          <section className="OverviewTop">
            <article className="OverviewBox">
              <p>Dashboard</p>
              <nav className="TopBoxHolder">
                <div className="TopBox">
                  <nav className="TopBoxNav1">
                    Total Orders
                    <img src="src/assets/Group.png" alt="" />
                  </nav>
                  <nav className="TopBoxNav2">
                    <span>730</span>
                    This Week
                  </nav>
                </div>
              </nav>
            </article>
          </section>
          <section className="OverviewMiddle">
            <img src="src/assets/chart.png" alt="" />
            <img src="src/assets/chart1.PNG" alt="" />
          </section>
          <section className="OverviewBottom">
            <article className="OverviewBottomWrapper">
              <p>Latest Order</p>
              <OrderSchedule />
            </article>
          </section>
        </div>
      </article>
    </main>
  );
};

export default Overview;
