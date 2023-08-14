import React from "react";
import FooterLogo from "../assests/footer-logo.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import FacebookIcon from "../assests/facebook-app-symbol.png";
import TwitterIcon from "../assests/twitter.png";
import YoutubeIcon from "../assests/youtube.png";
import { Link } from "react-router-dom";
import "../styles/Footer.css";
const Footer = () => {
  return (
    <div className="Footer">
      <div className="app-container">
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
                <li className="list-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-item">
                  <Link to="/about">About</Link>
                </li>
                <li className="list-item">
                  <Link to="/services">Services</Link>
                </li>
                <li className="list-item">
                  <Link to="/blogs">Blogs</Link>
                </li>
                <li className="list-item">
                  <Link to="/contactus">Contact Us</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Services</h2>
              <ul className="list-items">
                <li className="list-item">
                  <Link to="serviceproviders">Service Provider</Link>
                </li>
                <li className="list-item">
                  <Link to="/services/cable-tv">Cable Tv</Link>
                </li>
                <li className="list-item">
                  <Link to="/services/cable-internet">Cable Internet</Link>{" "}
                </li>
                <li className="list-item">
                  <Link to="/services/satellite-tv">Satellite Tv</Link>
                </li>
                <li className="list-item">
                  <Link to="/services/satellite-internet">
                    Satellite Internet
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="FooterContent">
              <h2>Contact Us</h2>
              <ul className="list-items">
                <li className="list-item">
                  <CallIcon /> (111) 222-3333
                </li>
                <li className="list-item">
                  <MailIcon /> support@shopsatellitetv.com
                </li>
                <li className="list-item">
                  <LocationOnIcon /> 5075 memorial dr suite, 343-B stone
                  mountain GA 30083
                </li>
              </ul>
              <div className="SocialIcons">
                <img src={FacebookIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={YoutubeIcon} alt="" />
              </div>
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
