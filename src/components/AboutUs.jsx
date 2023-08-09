import React from "react";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import HeroSection from "../pages/HeroSection";
import HeroCommon from "../pages/HeroCommon";
import ServiceProvider from "../pages/ServiceProviders";
import "../styles/About.css";

const AboutUs = () => {
  return (
    <div>
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
