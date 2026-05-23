import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./Footer.css";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="footer_container">
      <div className="footer-header">
        <div className="footer-header-content">
          <div className="footer-logo">
            <svg
              className="logo-icon"
              viewBox="0 0 60 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="30"
                cy="30"
                r="28"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="30"
                cy="30"
                r="22"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="30"
                cy="30"
                r="16"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="30"
                cy="30"
                r="10"
                stroke="#1a1a1a"
                strokeWidth="2"
                fill="none"
              />
              <circle cx="30" cy="30" r="4" fill="#1a1a1a" />
            </svg>
            <span className="logo-text">SpinCycle</span>
          </div>

          <div className="footer-apps">
            <p>Dowload our mobile experience</p>
            <div className="app-images_holder">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                alt="App Store"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/1280px-Google_Play_Store_badge_EN.svg.png"
                alt="Google Play"
              />
            </div>
          </div>

          <div className="footer-socials">
            <p>Follow us on our socials</p>
            <div className="social-icons">
              <div className="social-icon">
                <FaFacebook />
              </div>
              <div className="social-icon">
                <FaInstagram />
              </div>
              <div className="social-icon">
                <FaLinkedin />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-middle">
            <div className="footer-list-holder">
              <h3>Explore</h3>
              <ul className="column-links">
                <li>About SpinCycle</li>
                <li>In the News</li>
                <li>Blogs and Careers</li>
                <li>Cleaning Partners</li>
                <li>Legals</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>

            <div className="footer-list-holder">
              <h3>Our Solutions</h3>
              <ul>
                <li>Laundry</li>
                <li>Dry Cleaning</li>
                <li>Dry Cleaners</li>
                <li>Broken Washing Machines</li>
              </ul>
            </div>

            <div className="footer-list-holder">
              <h3>Our company</h3>
              <ul>
                <li>How it works</li>
                <li>Prices an Services</li>
                <li>Help Centre</li>
                <li>Locations</li>
                <li>Customers Review</li>
                <li>Sustainability</li>
              </ul>
            </div>

            <div className="footer-list-holder">
              <h3>For business</h3>
              <ul>
                <li>Hotel Partnerships</li>
                <li>Hospital Partnerships</li>
                <li>Restaurant Partnerships</li>
                <li>Business Partnerships</li>
                <li>Laundry for business</li>
              </ul>
            </div>
          </div>

          <div className="footer-contact">
            <button className="chat">
              <IoChatbubbleEllipsesOutline className="chat-icon" />
              Chat with us
            </button>

            <div className="contact-info">
              <div className="contact-block">
                <h4 className="contact-title">Contact Number</h4>
                <p>080-234-50000</p>
                <p>080-234-60000</p>
              </div>

              <div className="contact-block">
                <h4 className="contact-title">Head Office</h4>
                <p>Plot 4B, Graham Estate</p>
                <p>Lekki Penisullla, Lekki, Lagos</p>
              </div>

              <div className="contact-block">
                <h4 className="contact-title">Branch Office</h4>
                <p>Plot 4B, Fihan Estate</p>
                <p>Ikoyi, Lagos</p>
              </div>

              <div className="contact-block">
                <h4 className="contact-title">Working Days</h4>
                <p>Monday - Saturday</p>
                <p>9:30am - 4:00pm</p>
              </div>
            </div>

            <div className="contact-emails">
              <p>Info @spincycle.com</p>
              <p>spincycle@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
          All rights reserved. © SpinCycle 2026. By visiting this page you agree
          to our privacy policy and terms and conditions.
        </p>
      </div>
    </footer>
  );
};

export default Footer;