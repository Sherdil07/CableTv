import React from "react";
import ServiceSlider from "../pages/ServiceSlider";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
const Services = () => {
  return (
    <div>
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
