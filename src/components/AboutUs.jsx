import React from "react";
import About from "../pages/About";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import HeroSection from "../pages/HeroSection";
import ServiceProvider from "../pages/ServiceProviders";

const AboutUs = () => {
  return (
    <div>
      <About heading="About Us" />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
    </div>
  );
};

export default AboutUs;
