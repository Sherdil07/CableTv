import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
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
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={AboutUs} />
        <Route path="/services" exact Component={Services} />
        <Route path="/serviceproviders" exact Component={ProvidersTab} />
        <Route path="/contactus" exact Component={ContatctUs} />
        <Route path="/write-json" exact Component={Dashboard} />
        <Route path="services/cable-internet" exact Component={CableInternet} />
        <Route path="services/cable-tv" exact Component={CableTv} />
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
