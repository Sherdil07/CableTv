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
import Dashboard from "./components/Dashboard";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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
        <Route path="/privacy-policy" exact Component={PrivacyPolicy} />
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
        <Route path="/signup" exact Component={SignUp} />
        <Route
          path="/login"
          exact element={<Login setIsLoggedIn={setIsLoggedIn} />} // This route should have the prop
        />
        <Route
          path="/dashboard/*"
          exact element={
            isLoggedIn ? <ProtectedDashboard /> : <Navigate to="/login" />
          } // Protected route
        />
      </Routes>
      <Footer />
    </div>
  );
}
function ProtectedDashboard() {
  return <Dashboard />;
}
export default App;
