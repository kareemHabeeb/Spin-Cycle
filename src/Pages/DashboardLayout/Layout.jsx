import React from "react";
import "./Layout.css";
import Head from "../Dashboards/DashBoardHead/Head";
import Menu from "../Dashboards/Dashboardmenu/Menu";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="dashboard-layout">
      <Head />
      <article className="dashboard-layoutWrapper">
        <Menu />
        <section className="main-content">
          <Outlet />
        </section>
      </article>
    </main>
  );
};

export default Layout;
