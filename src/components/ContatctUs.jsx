import React from "react";
import About from "../pages/About";
import ContactForm from "../pages/ContactForm";
import HeroCommon from "../pages/HeroCommon";
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
                <p>(111) 222-3333</p>
                <p>support@shopsatellitetv.com</p>
                <p>UNITED STATES</p>
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
