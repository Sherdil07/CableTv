import React, { useEffect } from "react";
import CableInternetImg from "../assests/cable-int.png";
import ProvidersCommon from "./ProvidersCommon";
import HeroCommon from "./HeroCommon";
import HeroSection from "./HeroSection";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
const CableInternet = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  const backgroundImageObject =
    pageData?.CableInternet_Section?.CableInternet?.imageSrc;
  const backgroundImageURL = backgroundImageObject || "Loading...";
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);
  return (
    <div className="CableInternet">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>
          {" "}
          Cable Internet Providers Near Your Area | ShopSatelliteTV
        </title>
        <meta
          name="description"
          content="Experience seamless online connectivity with premier cable internet providers. Enjoy fast and reliable speeds for all your browsing and streaming needs."
        />
        <meta name="slug" content="cable-internet-providers" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}
      <HeroCommon
        heading={pageData?.CableInternet_Section?.HeroCommon?.heading}
        description={pageData?.CableInternet_Section?.HeroCommon?.description}
      />
      <ProvidersCommon
        imageSrc={backgroundImageURL}
        title={pageData?.CableInternet_Section?.CableInternet?.title}
        heading={pageData?.CableInternet_Section?.CableInternet?.heading}
        description={
          pageData?.CableInternet_Section?.CableInternet?.description
        }
      />
      <HeroSection />
    </div>
  );
};

export default CableInternet;
