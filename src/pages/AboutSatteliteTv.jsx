import React, { useEffect } from "react";
import AboutBG from "../assests/about-bg.jpg";
import "../styles/AboutSatellite.css";
import { Link } from "react-router-dom";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
const AboutSatteliteTv = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject =
    pageData?.Home?.aboutshopsatellitetv?.aboutshopsatelliteBG;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  return (
    <div className="SatelliteSection">
      <div
        className="SatelliteBG"
        style={{
          background: `url(${backgroundImageURL})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="AboutContent">
          <div className="LeftSide"></div>
          <div className="RightSide">
            <h2 className="title">
              {pageData?.Home?.aboutshopsatellitetv?.title}
            </h2>
            <h2 className="heading">
              {pageData?.Home?.aboutshopsatellitetv?.heading}
            </h2>
            <p className="SatelliteSectionDesc">{pageData?.Home?.aboutshopsatellitetv?.description}</p>
            <div className="figures">
              <div className="figures-1">
                <p>{pageData?.Home?.aboutshopsatellitetv?.fig_1}</p>
                <p>Ultra HD Quality</p>
              </div>
              <div className="figures-1">
                <p>{pageData?.Home?.aboutshopsatellitetv?.fig_2}</p>
                <p>Online Channels</p>
              </div>
              <div className="figures-1">
                <p>{pageData?.Home?.aboutshopsatellitetv?.fig_3}</p>
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
