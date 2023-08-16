import React, { useEffect, useRef } from "react";
import ServiceBG from "../assests/service-sec-bg.png";
import CableTv from "../assests/cable-tv.png";
import Cable from "../assests/cable-int.png";
import Satellite from "../assests/satellite-int.png";
import SatelliteTv from "../assests/satellite-tv.png";
import "../styles/Services.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

const Slide = ({ image, title, description, linkTo }) => {
  return (
    <div className="slide">
      <div
        className="slide-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="slide-content">
        <h3>{title}</h3>
        <p>{description}</p>
        {
          <Link to={linkTo}>
            <button>Learn More</button>
          </Link>
        }
      </div>
    </div>
  );
};

const ServiceSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    // Function to automatically move to the next slide
    const autoSlide = () => {
      if (sliderRef.current) {
        sliderRef.current.slickNext();
      }
    };

    // Start auto-sliding every 3 seconds
    const interval = setInterval(autoSlide, 3000);

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);
  
  const isMobile = window.innerWidth < 768;

  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3, // Show only 1 slide if isMobile is true, else show 3 slides
    slidesToScroll: 1,
  };

  return (
    <div className="Services">
      <div
        className="service-bg-img"
        style={{
          background: `url(${ServiceBG})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="app-container">
          <div className="heroContent">
            <h2 className="heading">SERVICES</h2>
            <h2 className="title">Find Perfect Network Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel.
            </p>
          </div>
          <div className="slider-app-container">
            <Slider {...sliderSettings} ref={sliderRef}>
              <Slide
                image={CableTv}
                title="Cable Tv"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                linkTo="services/cable-tv"
              />
              <Slide
                image={Cable}
                title="Cable Internet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                linkTo="services/cable-internet"
              />
              <Slide
                image={Satellite}
                title="Satellite Tv"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                linkTo="services/satellite-tv"
              />
              <Slide
                image={SatelliteTv}
                title="Satellite Internet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
                linkTo="services/satellite-internet"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
