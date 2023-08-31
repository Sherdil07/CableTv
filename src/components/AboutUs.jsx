import React from "react";
import { Helmet } from "react-helmet";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
import ServiceProvider from "../pages/ServiceProviders";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div>
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

      <HeroCommon
        heading="About Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
      />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
    </div>
  );
};

export default AboutUs;
