import React from "react";
import logo from "../assests/header-Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <div className="container">
      <div className="Navbar">
        <div className="leftSide">
          <img src={logo} alt="logo" />
        </div>
        <div className="rightSide">
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us</Link>
          <Link to="/services"> Services</Link>
          <Link to="/serviceproviders"> Service Providers</Link>
          <Link to="/contactus"> Contact Us</Link>
          <>
            <input
              className="header-searchBar"
              type="text"
              placeholder="Enter Zip Code"
            />
          </>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
