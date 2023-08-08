import React from "react";
import About from "../pages/About";
import ContactForm from "../pages/ContactForm";

const ContatctUs = () => {
  return (
    <div className="ContatctUs">
      <About heading="Contact Us" />
      <div className="Contact-Content">
        <div className="leftSide">
          <h2 className="title">Contact Us</h2>
          <h2 className="heading">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
            vulputate augue. Fusce nisi risus, ornare vitae egestas sit amet,
            luctus at tortor.
          </p>
          <div className="contact-info">
            <p>(111) 222-3333</p>
            <p>support@shopsatellitetv.com</p>
            <p>UNITED STATES</p>
          </div>
        </div>
        <div className="rightSide">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContatctUs;
