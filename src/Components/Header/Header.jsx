import React from "react";
import Button from "../Props/Button";
import "./Header.css";

const Header = () => {
  return (
    <main className="HeaderContainer">
      <article className="HeaderWrapper">
        <div className="HeaderLogoDiv">
          <img src="src/assets/SpinLogo.PNG" alt="" />
        </div>
        <nav className="HeaderPagesHolder">
          <span>Home</span>
          <span>Abut Us</span>
          <span>How it Works</span>
          <span>Pricing and Services</span>
          <span>For Business</span>
        </nav>
        <Button className="HeaderButton" text="Book Now" />
      </article>
    </main>
  );
};

export default Header;
