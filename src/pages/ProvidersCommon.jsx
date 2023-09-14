import React from "react";
import "../styles/ProvidersCommon.css";

const ProvidersCommon = ({ title, heading, description, imageSrc }) => {
  return (
    <div className="ProvidersCommon">
      <div className="content">
        <div className="row">
          {/* <div className="col-6"> */}
          <div className="LeftSide">
            <img src={imageSrc} alt="" />
          </div>
          {/* </div> */}
          <div className="col-6">
            <div className="RightSide">
              <h2 className="title">{title}</h2>
              <h2 className="heading">{heading}</h2>
              <p className="description">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProvidersCommon;
