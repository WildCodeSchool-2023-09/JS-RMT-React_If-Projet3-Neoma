import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import "./style.css";
import ContactForm from "./pages/ContactForm";

function App() {
  const [activeTab, setActiveTab] = useState("onglet1");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [userName, setUserName] = useState(null);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="App">
      <div className="tabs">
        <div>
          <div className="notconnected">
            <Outlet />
          </div>
        </div>

        {isPopupOpen && (
          <div className="popup">
            <div className="popup-content">
              <ContactForm />
              <button
                type="button"
                className="close-button"
                onClick={closePopup}
              >
                X
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
