import React, { useEffect } from "react";
import ContactForm from "../pages/ContactForm";
import HeroCommon from "../pages/HeroCommon";
import FacebookIcon from "../assests/facebook-app-symbol.png";
import TwitterIcon from "../assests/twitter.png";
import YoutubeIcon from "../assests/youtube.png";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import "../styles/ContactUs.css";
import { Helmet } from "react-helmet";
import { fetchPageData } from "../actions/pagesActions"; // Import the fetchPageData action
import { useSelector, useDispatch } from "react-redux"; // Import useSelector and useDispatch
const ContatctUs = () => {
  const pageData = useSelector((state) => state.pages.pageData);
  // Access dispatch function to dispatch actions
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch page data when the component mounts
    dispatch(fetchPageData());
  }, [dispatch]);

  return (
    <div className="ContatctUs">
      {/* START POINT FOR SEO PURPOSE */}
      <Helmet>
        <title>About our company | ShopSatelliteTV</title>
        <meta
          name="description"
          content=" Connect with us easily. Reach our dedicated team for inquiries, assistance, and information. Your reliable partner – Contact us today."
        />
        <meta name="slug" content="contact-us" />
      </Helmet>
      {/* END POINT FOR SEO PURPOSE */}

      <HeroCommon
        heading={pageData?.ContactUs?.HeroCommon?.heading}
        description={pageData?.ContactUs?.HeroCommon?.description}
      />
      <div className="Contact-Content">
        <div className="row">
          <div className="col-6">
            <div className="leftSide">
              <h2 className="title">
                {pageData?.ContactUs?.Contact_Content?.title}
              </h2>
              <h2 className="heading">
                {pageData?.ContactUs?.Contact_Content?.heading}
              </h2>
              <p>{pageData?.ContactUs?.Contact_Content?.description}</p>
              <div className="contact-info">
                <ul className="list-items">
                  <li className="list-item">
                    <CallIcon /> (866) 236-3017
                  </li>
                  <li className="list-item">
                    <MailIcon /> support@shopsatellitetv.com
                  </li>
                  <li className="list-item">
                    <LocationOnIcon /> 5075 memorial dr suite, 343-B stone
                    mountain GA 30083
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
