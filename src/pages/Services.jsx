import React, { useEffect, useRef } from "react";
import ServiceBG from "../assests/service-sec-bg.png";
import Card1 from "../assests/cable-int.png";
import Card2 from "../assests/cable-tv.png";
import Card3 from "../assests/satellite-int.png";
import Card4 from "../assests/satellite-tv.png";
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

const Services = () => {
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
                image={Card1}
                title="Cable Tv"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <Slide
                image={Card2}
                title="Cable Internet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <Slide
                image={Card3}
                title="Satellite Tv"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
              <Slide
                image={Card4}
                title="Satellite Internet"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
              />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
