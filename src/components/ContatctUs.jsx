import React from "react";
import ContactForm from "../pages/ContactForm";
import HeroCommon from "../pages/HeroCommon";
import FacebookIcon from "../assests/facebook-app-symbol.png";
import TwitterIcon from "../assests/twitter.png";
import YoutubeIcon from "../assests/youtube.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import "../styles/ContactUs.css";

const ContatctUs = () => {
  return (
    <div className="ContatctUs">
      <HeroCommon
        heading="Contact Us"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat tortor lorem, quis tempor felis commodo vel."
      />
      <div className="Contact-Content">
        <div className="row">
          <div className="col-6">
            <div className="leftSide">
              <h2 className="title">Contact Us</h2>
              <h2 className="heading">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
                vulputate augue. Fusce nisi risus, ornare vitae egestas sit
                amet, luctus at tortor.
              </p>
              <div className="contact-info">
                <ul className="list-items">
                  <li className="list-item">
                    <CallIcon /> (111) 222-3333
                  </li>
                  <li className="list-item">
                    <MailIcon /> support@shopsatellitetv.com
                  </li>
                  <li className="list-item">
                    <LocationOnIcon /> United State
                  </li>
                </ul>
              </div>
              <div className="Contact-SocialIcons">
                <img src={FacebookIcon} alt="" />
                <img src={TwitterIcon} alt="" />
                <img src={YoutubeIcon} alt="" />
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="rightSide">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContatctUs;
