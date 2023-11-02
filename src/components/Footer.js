import React from "react";
import "./FooterStyles.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__logo">
            <img src="assets/logo.jpg" alt="Logo" />
          </div>
          <div className="footer__links">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="footer__social">
            <ul>
              <li>
                <a href="https://facebook.com">Facebook</a>
              </li>
              <li>
                <a href="https://twitter.com">Twitter</a>
              </li>
              <li>
                <a href="https://linkedin.com">LinkedIn</a>
              </li>
              <li>
                <a href="https://instagram.com">Instagram</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>&copy; Schoolwork by SamCcode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
