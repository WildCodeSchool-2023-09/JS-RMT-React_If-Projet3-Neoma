import React, { useState } from "react";
import "./App.css";
// import { Link } from "react-router-dom";
import ContactForm from "./pages/ContactForm";
import InscriptionForm from "./pages/InscriptionForm";

function App() {
  const [setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className="App">
      <ContactForm onAddContact={addContact} />
      <InscriptionForm />
    </div>
  );
}

export default App;
