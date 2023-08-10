import React from "react";
import ServiceImage from "../assests/why-choose-sect.jpg";
import "../styles/ServiceProvider.css";

const ServiceProvider = () => {
  return (
    <div className="ServiceProviderSection">
      <div className="AboutContent">
        <div className="leftSide">
          <h2 className="title">CHECK SERVICES PROVIDERS</h2>
          <h2 className="heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            dignissim, urna faucibus tincidunt viverra, ipsum nibh dignissim
            nunc, eget tristique ex urna vel magna. Cras ullamcorper dui mi.
            Nulla porta porta faucibus. Fusce id ligula velit. Vestibulum
            lacinia nisi vel nulla blandit, quis euismod lorem posuere. Donec at
            elit ex.
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
        <div className="rightSide">
          <div className="Counter">
            <p>UP TO </p>
            <h1>40 MB</h1>
            <h2>PER Second</h2>
          </div>
          <div className="serviceimg">
            <img src={ServiceImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
