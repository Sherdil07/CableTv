import React from "react";
import HeroCommon from "../pages/HeroCommon";
import "../styles/ProvidersTab.css";
const ProvidersTab = () => {
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
          />
          <button className="btn-findnow"> Find Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProvidersTab;
