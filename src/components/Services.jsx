import React from "react";
import ServiceSlider from "../pages/ServiceSlider";
import About from "../pages/About";
import HeroSection from "../pages/HeroSection";
const Services = () => {
  return (
    <div>
      <About heading="Services" />
      <ServiceSlider />
      <HeroSection />
    </div>
  );
};

export default Services;
