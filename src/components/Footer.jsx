import React from "react";
import FooterLogo from "../assests/footer-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="FooterContent">
              <div className="footer-logo">
                <img src={FooterLogo} alt="" />
              </div>
              <div className="footer-text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Important Links</h2>
              <ul className="list-items">
                <li className="list-item">Home</li>
                <li className="list-item">About</li>
                <li className="list-item">Services</li>
                <li className="list-item">Blogs</li>
                <li className="list-item">Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Services</h2>
              <ul className="list-items">
                <li className="list-item">Service Provider</li>
                <li className="list-item">Cable Tv</li>
                <li className="list-item">Cable Internet</li>
                <li className="list-item">Satellite Tv</li>
                <li className="list-item">Satellite Internet</li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Contact Us</h2>
              <ul className="list-items">
                <li className="list-item">(111) 222-3333</li>
                <li className="list-item">SUPPORT@SHOPSATELLITETV.COM</li>
                <li className="list-item">
                  <LocationOnIcon /> UNITED STATESUNITED STATE
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="postFooter">
          <h2>© 2023 Shop Satellite Tv. All rights reserved.</h2>
          <p>PRIVACY POLICY</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
