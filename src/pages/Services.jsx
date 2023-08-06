import React from "react";
import ServiceBG from "../assests/service-sec-bg.png";
import "../styles/Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Services() {
  return (
    <div className="Services">
      <div
        className="service-bg-img"
        style={{
          background: `url(${ServiceBG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="heroContent">
            <h2>SERVICES</h2>
            <h2>Find Perfect Network Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
