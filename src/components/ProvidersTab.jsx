import React, { useState } from "react";
import HeroCommon from "../pages/HeroCommon";
import "../styles/ProvidersTab.css";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const ProvidersTab = () => {
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

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="Service-Providers">
      <HeroCommon
        heading="Service Providers"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
      />
      <div className="CheckProviders">
        <h2 className="title">SHOP SATELLITE TV</h2>
        <h2 className="heading">Need Fast & Secure Broadband?</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat
          tortor lorem, quis tempor felis commodo vel.
        </p>
        <div className="searchBar">
          <input
            className="searchBar"
            type="text"
            placeholder="Enter Zip Code"
            onChange={(e) => setzipCode(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <button className="btn-findnow" onClick={handleClick}>
            Find Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProvidersTab;
