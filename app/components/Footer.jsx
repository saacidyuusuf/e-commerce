import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaTiktok,
  FaCreditCard,
  FaCcMastercard,
} from "react-icons/fa";
import { FcCopyright, FcStart } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footercol">
        <div className="footers">
          <h2>Company</h2>
          <ul>
            <li>Hormud</li>
            <li>astan</li>
            <li>salam</li>
            <li>mybank</li>
          </ul>
        </div>
        <div className="footers">
          <h2>Brand</h2>
          <ul>
            <li>Hormud</li>
            <li>astan</li>
            <li>salam</li>
            <li>mybank</li>
          </ul>
        </div>
        <div className="footers">
          <h2>Support</h2>
          <ul>
            <li>Hormud</li>
            <li>astan</li>
            <li>salam</li>
            <li>mybank</li>
          </ul>
        </div>
      </div>
        <span>Secure Checkout</span>
      <div className="checkouts">
        <FaCcMastercard />
        <FaCreditCard />
      </div>
        <span>Contact</span>
      <div className="media">
        <FaFacebook className="icons" />
        <FaTwitter className="icons" />
        <FaInstagram className="icons" />
      </div>
      <div className="copyright">
        <p>
          <FcCopyright /> Copyright 2023 Cabdimalik. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
