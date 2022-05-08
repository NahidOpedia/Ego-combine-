import React, { useEffect } from "react";
import "./Footer.css";

import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="footer-bg">
      <div className="footer-container">
        <h1 className="footer-title">Don't miss out, Stay updated</h1>
        {/* <div className="input-box d-flex justify-content-between">
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your email address"
            className="email-input"
          />
          <input type="button" value="Subscribe" className="submit-btn" />
        </div> */}
        <p className="footer-text">
          Don't hesitate to subscribe to latest news about ICo markets as well
          as crucial financial knowledge to become successful investors globally
        </p>

        <div className="footer-social-icon d-flex justify-content-between">
          <a
            href="https://discord.com/invite/cZhaVGxG"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-discord"></i>
          </a>
          <a
            href="https://twitter.com/Growyourego"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter mx-3"></i>
          </a>
          <a
            href="https://growyourego.finance/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa  fa-youtube"></i>
          </a>
          <a
            href="https://t.me/egosystem"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-solid fa-paper-plane"></i>
          </a>
        </div>
        <p className="copyright">
          Copyright © 2022. All rights reserved by Your Company.
        </p>
      </div>
    </div>
  );
};

export default Footer;
