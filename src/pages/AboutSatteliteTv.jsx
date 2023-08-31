import React from "react";
import AboutBG from "../assests/about-bg.jpg";
import "../styles/AboutSatellite.css";
import { Link } from "react-router-dom";
const AboutSatteliteTv = () => {
  return (
    <div className="SatelliteSection">
      <div
        className="SatelliteBG"
        style={{
          background: `url(${AboutBG})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="AboutContent">
          <div className="LeftSide"></div>
          <div className="RightSide">
            <h2 className="title">ABOUT SHOP SATELLITE TV</h2>
            <h2 className="heading">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              dignissim, urna faucibus tincidunt viverra, ipsum nibh dignissim
              nunc, eget tristique ex urna vel magna. Cras ullamcorper dui mi.
              Nulla porta porta faucibus. Fusce id ligula velit. Vestibulum
              lacinia nisi vel nulla blandit, quis euismod lorem posuere. Donec
              at elit ex.
            </p>
            <div className="figures">
              <div className="figures-1">
                <p>4 K</p>
                <p>Ultra HD Quality</p>
              </div>
              <div className="figures-1">
                <p>90 +</p>
                <p>Online Channels</p>
              </div>
              <div className="figures-1">
                <p>350 +</p>
                <p>Internet Speed</p>
              </div>
            </div>
            <div className="btn">
              <Link to="serviceproviders">
                <button className="CheckNow">Check Now</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSatteliteTv;
