// ContactForm.jsx

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

function ContactForm() {
  const [contact, setContact] = useState({
    nom: "",
    prenom: "",
    email: "",
    Tel: "",
  });

  const [userId, setUserId] = useState(null);

  useEffect(() => {
    // Récupérer l'IDUtilisateur depuis le sessionStorage
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData && userData.id) {
      setUserId(userData.id);
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prevContact) => ({
      ...prevContact,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Assurez-vous que userId est disponible avant d'envoyer la requête
    if (userId) {
      // Inclure l'IDUtilisateur dans les données du contact
      const contactData = {
        ...contact,
        IDUtilisateur: userId,
      };

      // Envoyer les données au serveur backend
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/api/createcontact`,
          contactData
        )
        .then((response) => {
          console.info(response.data);
        })
        .catch((error) => {
          console.error("Pas de réponse du serveur :", error.request);
        });
    }
  };

  return (
    <div className="formulaire">
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input
          className="taille"
          type="text"
          id="nom"
          name="nom"
          value={contact.nom}
          onChange={handleChange}
          required
        />
        <label htmlFor="prenom">Prénom :</label>
        <input
          className="taille"
          type="text"
          id="prenom"
          name="prenom"
          value={contact.prenom}
          onChange={handleChange}
        />
        <label htmlFor="email">Email :</label>
        <input
          className="taille"
          type="email"
          id="email"
          name="email"
          value={contact.email}
          onChange={handleChange}
        />
        <label htmlFor="mdp">Numéro de téléphone :</label>
        <input
          className="taille"
          type="Tel"
          id="Tel"
          name="Tel"
          value={contact.Tel}
          onChange={handleChange}
        />
        <button type="submit" className="ajouter">
          Ajouter
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
