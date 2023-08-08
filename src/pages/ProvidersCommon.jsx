import React from "react";
import "../styles/ProvidersCommon.css";

const ProvidersCommon = ({ title, heading, description, imageSrc }) => {
  return (
    <div className="ProvidersCommon">
      <div className="content">
        <div className="leftSide">
          <h2 className="title">{title}</h2>
          <h2 className="heading">{heading}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="rightSide">
          <img src={imageSrc} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ProvidersCommon;
