import React, { useState } from "react";
import HeroBG from "../assests/hero-section-and-pre-footer-bg.jpg";
import "../styles/HeroSection.css";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const HeroSection = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [zipCode, setzipCode] = useState("");

  const handleClick = async () => {
    if (!zipCode) return;

    try {
      const res = await axios.post("http://localhost:5000", {
        zipCode: zipCode,
      });
      console.log(res.data);

      dispatch(setZipCodeData(res.data));

      navigate(`/zipCode/${zipCode}`);
    } catch (error) {
      // show error on screen
      console.log(error);
    }
  };

  return (
    <div className="HeroSection">
      <div className="app-container">
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
              value={zipCode}
              onChange={(e) => setzipCode(e.target.value)}
            />
            <button className="btn-findnow" onClick={handleClick}>
              Find Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
