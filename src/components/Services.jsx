import React from "react";
import ServiceSlider from "../pages/ServiceSlider";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
import { Helmet } from "react-helmet";

const Services = () => {
  return (
    <div className="services">
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
        heading="Services"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
      />
      <ServiceSlider />
      <HeroSection />
    </div>
  );
};

export default Services;
