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
          <Link style={{ textDecoration: "none" }} to={"/about"}>
            <span>About Us</span>
          </Link>

          <span>How it Works</span>
          <Link style={{ textDecoration: "none" }} to={"/pricing&services"}>
            <span>Pricing and Services</span>
          </Link>
          <span>For Business</span>
        </nav>
        <Link to={"/signup"}>
          <Button className="HeaderButton" text="Book Now" />
        </Link>
      </article>
    </main>
  );
};

export default Header;
