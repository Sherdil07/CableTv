import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "../styles/popupcard.css";
import { useNavigate } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ClearIcon from "@mui/icons-material/Clear";

const PopupCard = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const navigate = useNavigate();
  const [zipCode, setZipCode] = useState("");
  const lastPopupTime = localStorage.getItem("lastPopupTime");

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  const closePopup = () => {
    setPopupVisible(false);
    localStorage.setItem("lastPopupTime", Date.now());
  };

  useEffect(() => {
    // Function to automatically show the pop-up after 5 seconds on page load or refresh
    const showPopupOnLoad = () => {
      togglePopup();
      localStorage.setItem("lastPopupTime", Date.now());

      // Set a timer to close the pop-up after 5 seconds
      setTimeout(() => {
        closePopup();
      }, 5000);
    };

    // Show the pop-up on page load or refresh
    showPopupOnLoad();

    // Set up a timer to show the pop-up every 10 minutes
    const timer = setInterval(() => {
      togglePopup();
      localStorage.setItem("lastPopupTime", Date.now());

      // Set a timer to close the pop-up after 5 seconds
      setTimeout(() => {
        closePopup();
      }, 5000);
    }, 600000); // 600,000 milliseconds = 10 minutes

    // Clean up the timer when the component unmounts
    return () => clearInterval(timer);
  }, []);

  const handleClick = async () => {
    if (!zipCode) return;
    navigate(`/zipCode/${zipCode}`);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      {/* Modal component for the pop-up */}
      <Modal
        isOpen={isPopupVisible}
        onRequestClose={closePopup}
        contentLabel="Popup Card"
        style={{
          overlay: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(0, 0, 0, 0.5)",
          },
          content: {
            width: "600px",
            height: "220px",
            textAlign: "center",
            background: "white",
            border: "none",
          },
        }}
      >
        <button className="popup-close-button" onClick={closePopup}>
          <ClearIcon />
        </button>
        <h2 className="popup">
          Discover Top TV and Internet Providers Near You
        </h2>
        <h5 className="popup-title">
          <LocationOnIcon />
          Enter your zip to see providers in your area.
        </h5>
        {/* Add your search bar and button here */}
        <div className="searchBar">
          <input
            className="popup searchBar"
            type="text"
            placeholder="Enter Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            onKeyDown={handleKeyPress}
          />

          <button className="btn-findnow" onClick={handleClick}>
            Find Now
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default PopupCard;
