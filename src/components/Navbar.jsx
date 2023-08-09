// Navbar.js
import React, { useState } from "react";
import logo from "../assests/header-Logo.png";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const servicesOptions = [
  "Cable Tv",
  "Cable Internet",
  "Satellite Tv",
  "Satellite Internet",
];

function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="container">
      <div className={`Navbar ${sidebarOpen ? "open-sidebar" : ""}`}>
        <div className="leftSide">
          <img src={logo} alt="logo" />
        </div>
        <div className="rightSide">
          {/* Toggle Button for Opening/Closing Sidebar */}
          <button className="sidebar-toggle" onClick={toggleSidebar}>
            ☰
          </button>
        </div>
        <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
          {/* Sidebar Content */}
          <Link to="/"> Home </Link>
          <Link to="/about"> About Us</Link>
          <div className="dropdown">
            <button className="dropbtn">
              <Link to="/services"> Services</Link>
            </button>
            <div className="dropdown-content">
              {servicesOptions.map((service, index) => (
                <Link
                  key={index}
                  to={`/services/${service.replace(" ", "-").toLowerCase()}`}
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>
          <Link to="/serviceproviders"> Service Providers</Link>
          <Link to="/contactus"> Contact Us</Link>
          <input
            className="header-searchBar"
            type="text"
            placeholder="Enter Zip Code"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
