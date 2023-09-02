import React, { useState, useEffect } from "react";
import MainSection from "../assests/main-hero-sec-home.jpg";
import "../styles/Home.css";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import ServiceProvider from "../pages/ServiceProviders";
import HeroSection from "../pages/HeroSection";
import BlogArticles from "../pages/BlogArticles";
import ServiceSlider from "../pages/ServiceSlider";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
function Home() {
  const navigate = useNavigate();
  const [zipCode, setzipCode] = useState("");

  const pageData = useSelector((state) => state.pages.pageData);
  console.log("pageData", pageData);
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  // Log the pageData to verify if it's updating
  console.log("Page Data in Home Component:", pageData);

  const handleClick = async () => {
    if (!zipCode) return;

    navigate(`/zipCode/${zipCode}`);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };
  return (
    <div className="app-container">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>About Us - Your Website</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
        />
        <meta name="slug" content="about-us" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <div
        className="mainSection"
        style={{
          background: `url(${MainSection})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mainContent">
          <h2 className="title"> {pageData.Home.main_section.title}</h2>
          <h2 className="subTitle">{pageData.Home.main_section.subtitle}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
            vulputate augue. Fusce nisi risus, ornare vitae egestas sit amet,
            luctus at tortor.
          </p>
          <div className="searchBar">
            <input
              className="searchBar"
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e) => setzipCode(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <button className="btn-findnow" onClick={handleClick}>
              Find Now
            </button>
          </div>
        </div>
      </div>
      <ServiceSlider />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
      <BlogArticles />
    </div>
  );
}

export default Home;
