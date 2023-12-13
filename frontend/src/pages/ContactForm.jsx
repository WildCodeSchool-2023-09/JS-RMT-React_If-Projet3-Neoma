import React, { useState } from "react";
import "./Contact.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    category: "",
    additionalInfo: "",
  });

  const [contacts, setContacts] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submitForm = () => {
    const newContact = { ...formData };

    newContact.additionalInfoTitle = formData.category;

    setContacts((prevContacts) => [...prevContacts, newContact]);
    setFormData({
      firstName: "",
      lastName: "",
      phoneNumber: "",
      category: "",
      additionalInfo: "",
    });
  };

  return (
    <form>
      <h1 className="titreContact">Votre annuaire privé</h1>
      <h2 className="phraseContact">
        Un accès facile à tous vos contacts en un seul clic
      </h2>
      <div className="formulaire">
        <label htmlFor="firstName">Nom:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="lastName">Prénom:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="phoneNumber">Numéro de téléphone:</label>
        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
          required
        />
        <label htmlFor="category">Catégorie:</label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          required
        />
        {formData.category.trim() !== "" && (
          <div>
            <label htmlFor="additionalInfo">
              {formData.category} Information:
            </label>
            <input
              type="text"
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
            />
          </div>
        )}
        <button className="ajouter" type="button" onClick={submitForm}>
          Ajouter un contact
        </button>
        <div>
          <h2>Liste des contacts</h2>
          <ul className="liste_contact">
            {contacts.map((contact) => (
              <li key={contact.id}>
                <strong>
                  {contact.firstName} {contact.lastName}
                </strong>{" "}
                ({contact.phoneNumber}) - {contact.category} Information:{" "}
                {contact.additionalInfo}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;
