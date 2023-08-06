import React from "react";
import MainSection from "../assests/main-hero-sec-home.jpg";
import "../styles/Home.css";
import Services from "./Services";
import AboutSatteliteTv from "./AboutSatteliteTv";
import ServiceProvider from "./ServiceProviders";
import HeroSection from "./HeroSection";

function Home() {
  return (
    <div className="container">
      <div
        className="mainSection"
        style={{
          background: `url(${MainSection})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mainContent">
          <h2 className="title">SHOP SATELLITE TV</h2>
          <h2 className="subTitle">Journey With Fast Internet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
            vulputate augue. Fusce nisi risus, ornare vitae egestas sit amet,
            luctus at tortor.
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
      <Services />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
    </div>
  );
}

export default Home;
