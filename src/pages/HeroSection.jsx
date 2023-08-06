import React from "react";
import HeroBG from "../assests/hero-section-and-pre-footer-bg.jpg";
import "../styles/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="HeroSection">
      <div className="container">
        <div
          className="HeroContent"
          style={{
            backgroundImage: `url(${HeroBG})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <h2 className="title">SHOP SATELLITE TV</h2>
          <h2 className="subTitle">Need Fast & Secure Broadband?</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel.
          </p>
          <div className="searchBar">
            <input
              className="searchBar"
              type="text"
              placeholder="Enter Zip Code"
            />
            <button className="btn-findnow"> Find Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
