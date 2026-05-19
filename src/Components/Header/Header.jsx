import React from "react";
import Button from "../Props/Button";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <main className="HeaderContainer">
      <article className="HeaderWrapper">
        <div className="HeaderLogoDiv">
          <img src="src/assets/SpinLogo.PNG" alt="" />
        </div>
        <nav className="HeaderPagesHolder">
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <span>Home</span>
          </Link>
          <span>About Us</span>
          <span>How it Works</span>
          <Link style={{ textDecoration: "none" }} to={"/pricing&services"}>
            <span>Pricing and Services</span>
          </Link>
          <span>For Business</span>
        </nav>
        <Button className="HeaderButton" text="Book Now" />
      </article>
    </main>
  );
};

export default Header;
