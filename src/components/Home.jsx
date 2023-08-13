import React , {useState} from "react";
import MainSection from "../assests/main-hero-sec-home.jpg";
import "../styles/Home.css";
import AboutSatteliteTv from "../pages/AboutSatteliteTv";
import ServiceProvider from "../pages/ServiceProviders";
import HeroSection from "../pages/HeroSection";
import BlogArticles from "../pages/BlogArticles";
import ServiceSlider from "../pages/ServiceSlider";
import axios from "axios";
import { setZipCodeData } from "../reducers/zipCodeReducer";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [zipCode, setzipCode] = useState("")


  const handleClick = async() =>{

    if(!zipCode)
    return;

    try {
      const res = await axios.post("http://localhost:5000",{zipCode:"00601"})
      console.log(res.data)

      dispatch(setZipCodeData(res.data))

      navigate(`/zipCode/${zipCode}`)


    } catch (error) {
      // show error on screen
      console.log(error)
    }
  
  }
  return (
    <div className="container">
      <div
        className="mainSection"
        style={{
          background: `url(${MainSection})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="mainContent">
          <h2 className="title">SHOP SATELLITE TV</h2>
          <h2 className="subTitle">Journey With Fast Internet</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
            consequat tortor lorem, quis tempor felis commodo vel. Mauris eu
            vulputate augue. Fusce nisi risus, ornare vitae egestas sit amet,
            luctus at tortor.
          </p>
          <div className="searchBar">
            {/* <div className="inputSearch"> */}
            <input
              className="searchBar"
              type="text"
              placeholder="Enter Zip Code"
              value={zipCode}
              onChange={(e)=> setzipCode(e.target.value)}
            />
            {/* </div> */}
            {/* <div className="btn"> */}
            <button className="btn-findnow" onClick={handleClick}> Find Now</button>
            {/* </div> */}
          </div>
        </div>
      </div>
      <ServiceSlider />
      <AboutSatteliteTv />
      <ServiceProvider />
      <HeroSection />
      <BlogArticles />
    </div>
  );
}

export default Home;
