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
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div className="container">
      <div className="Navbar">
        <div className="leftSide">
          <img className="ImgLogo" src={logo} alt="logo" />
        </div>
        <div className="rightSide">
          <button className="menu-button" onClick={toggleSidebar}>
            ☰ Menu
          </button>
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
          <>
            <input
              className="header-searchBar"
              type="text"
              placeholder="Enter Zip Code"
            />
          </>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="sidebar">
          <div className="sidebar-header">
            <button className="close-button" onClick={toggleSidebar}>
              ×
            </button>
          </div>
          <div className="sidebar-content">
            {/* Links */}
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
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
