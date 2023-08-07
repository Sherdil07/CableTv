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

const Slide = ({ image, title, description }) => {
  return (
    <div className="slide">
      <div
        className="slide-image"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="slide-content">
        <h3>{title}</h3>
        <p>{description}</p>
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
  const sliderSettings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
        <div className="container">
          <div className="heroContent">
            <h2 className="heading">SERVICES</h2>
            <h2 className="title">Find Perfect Network Solutions</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              consequat tortor lorem, quis tempor felis commodo vel.
            </p>
          </div>
          <div className="slider-container">
            <Slider {...sliderSettings} ref={sliderRef}>
              <Slide
                image={CableTv}
                title="Card 1"
                description="Content of Card 1"
              />
              <Slide
                image={Cable}
                title="Card 2"
                description="Content of Card 2"
              />
              <Slide
                image={Satellite}
                title="Card 3"
                description="Content of Card 3"
              />
              <Slide
                image={SatelliteTv}
                title="Card 4"
                description="Content of Card 4"
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSlider;
