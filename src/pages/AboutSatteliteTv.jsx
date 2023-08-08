import React from "react";
import AboutBG from "../assests/about-bg.jpg";
import "../styles/AboutSatellite.css";

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
          <div className="LeftSide">

          </div>
          <div className="RightSide">
          <h2 className="title">ABOUT SHOP SATELLITE TV</h2>
          <h2 className="heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
            vulputate augue. Fusce nisi risus, ornare vitae egestas sit amet,
            luctus at tortor.
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
            <button className="CheckNow">Check Now</button>
          </div>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default AboutSatteliteTv;
