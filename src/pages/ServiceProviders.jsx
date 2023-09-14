import React, { useEffect } from "react";
import "../styles/ServiceProvider.css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
const ServiceProvider = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject = pageData?.Home?.checkservicesproviders?.image;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  return (
    <div className="ServiceProviderSection">
      {/* START POINT FOR SEO PURPOSE */}
      {/* <Helmet>
        <title> Service Providers | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Explore the list of best internet, satellite TV, cable TV, and phone service providers with Shop Satellite TV. Elevate your entertainment and connectivity experience."
        />
        <meta name="slug" content="service-providers" />
      </Helmet> */}
      {/* END POINT FOR SEO PURPOSE */}
      <div className="AboutContent">
        <div className="leftSide">
          <h2 className="title">
            {pageData?.Home?.checkservicesproviders?.title}
          </h2>
          <h2 className="heading">
            {pageData?.Home?.checkservicesproviders?.heading}
          </h2>
          <p>{pageData?.Home?.checkservicesproviders?.description}</p>
          <div className="figures">
            <div className="figures-1">
              <p>{pageData?.Home?.checkservicesproviders?.fig_1}</p>
              <p>Ultra HD Quality</p>
            </div>
            <div className="figures-1">
              <p>{pageData?.Home?.checkservicesproviders?.fig_2}</p>
              <p>Online Channels</p>
            </div>
            <div className="figures-1">
              <p>{pageData?.Home?.checkservicesproviders?.fig_3}</p>
              <p>Internet Speed</p>
            </div>
          </div>
          <div className="btn">
            <Link to="serviceproviders">
              <button className="CheckNow">Check Now</button>
            </Link>
          </div>
        </div>
        <div className="rightSide">
          <div className="Counter">
            <p>UP TO </p>
            <h1>40 MB</h1>
            <h2>PER Second</h2>
          </div>
          <div className="serviceimg">
            <img src={backgroundImageURL} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceProvider;
