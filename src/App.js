import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./components/Home";
// import "./App.css";
import "./App.css";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import ProvidersTab from "./components/ProvidersTab";
import ContatctUs from "./components/ContatctUs";
import CableInternet from "./pages/CableInternet";
import SatelliteInternet from "./pages/SatelliteInternet";
import SatelliteTv from "./pages/SatelliteTv";
import CableTv from "./pages/CableTv";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ZipCodeInfo from "./components/zipCodeInfo";
import Blog_1 from "./pages/Blog_1";
import Blog_2 from "./pages/Blog_2";
import PopupCard from "./pages/PopUpCard";
import Modal from "react-modal"; // Import react-modal
import ReadBlog_1 from "./pages/ReadBlog_1";
import ReadBlog_2 from "./pages/ReadBlog_2";
import ReadBlog_3 from "./pages/ReadBlog_3";
Modal.setAppElement("#root");
function App() {
  return (
    <div className="App">
      <PopupCard />
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/blog_1" exact Component={ReadBlog_1} />
        <Route path="/blog_2" exact Component={ReadBlog_2} />
        <Route path="/blog_3" exact Component={ReadBlog_3} />
        <Route path="/aboutus" exact Component={AboutUs} />
        <Route path="/services" exact Component={Services} />
        <Route path="/serviceproviders" exact Component={ProvidersTab} />
        <Route path="/contactus" exact Component={ContatctUs} />
        <Route path="/privacy-policy" exact Component={PrivacyPolicy} />
        <Route path="services/cable-internet" exact Component={CableInternet} />
        <Route path="services/cable-tv" exact Component={CableTv} />
        <Route path="blog/cabletv" exact Component={Blog_1} />
        <Route path="blog/satellitetv" exact Component={Blog_2} />
        <Route
          path="services/satellite-internet"
          exact
          Component={SatelliteInternet}
        />
        <Route path="services/satellite-tv" exact Component={SatelliteTv} />
        <Route path="/privacypolicy" exact Component={PrivacyPolicy} />
        <Route path="/zipCode/:zipCode" exact Component={ZipCodeInfo} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
