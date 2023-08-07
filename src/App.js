import React from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact Component={Home} />
        <Route path="/about" exact Component={AboutUs} />
        <Route path="/services" exact Component={Services} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
