import React, { useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";
import ContactForm from "./pages/ContactForm";

function App() {
  const [setContacts] = useState([]);

  const addContact = (newContact) => {
    setContacts((prevContacts) => [...prevContacts, newContact]);
  };

  return (
    <div className="App">
      <ContactForm onAddContact={addContact} />
      <Link to="/InscriptionForm">
        <h1>S'inscrire</h1>
      </Link>
      <Link to="/ContactForm">
        <h1>Ajouter des contacts</h1>
      </Link>
    </div>
  );
}

export default App;
