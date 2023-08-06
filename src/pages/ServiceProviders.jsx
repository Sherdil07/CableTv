import React from "react";
import ServiceProviderBG from "../assests/why-choose-sect.jpg";
import "../styles/ServiceProvider.css";

const ServiceProvider = () => {
  return (
    <div className="ServiceProviderSection">
      <div
        className="ServiceProviderBG"
        style={{
          background: `url(${ServiceProviderBG}) `,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right",
          marginTop: "100px",
          //   backgroundSize: "cover",
        }}
      >
        <div className="AboutContent">
          <h2 className="title">CHECK SERVICES PROVIDERS</h2>
          <h2 className="heading">
            Satellite TV is a form of broadcasting television signals via
            satellites to receive signals at the subscriber's home.
          </h2>
          <p>
            It offers a wide range of channels and programming, including news,
            sports, movies, TV shows, and more. The main components of a
            satellite TV system include a satellite dish, a receiver, and a
            remote control.
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
  );
};

export default ServiceProvider;
