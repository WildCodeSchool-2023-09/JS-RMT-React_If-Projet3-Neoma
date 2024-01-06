import React, { useState, useEffect } from "react";
import axios from "axios";
import "./list.css"; // Importez le fichier CSS

function List() {
  const [ContactsData, setContactsData] = useState([]);

  useEffect(() => {
    // Récupérer l'IDUtilisateur depuis le sessionStorage ou d'où vous le stockez
    const userData = JSON.parse(sessionStorage.getItem("userData"));
    if (userData && userData.id) {
      // Appeler l'API backend pour récupérer les contacts de l'utilisateur
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/api/contact/${userData.id}`)
        .then((response) => {
          setContactsData(response.data);
          console.info(response.data);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des contacts :", error);
        });
    }
  }, []); // Effect sera exécuté une seule fois lors du montage du composant

  return (
    <div className="ContactList">
      <h2>Liste des contacts</h2>
      <div className="contact">
        <table />
        <tr>
          <th>Nom</th>
          <th>Prénom</th>
          <th>Téléphone</th>
          <th>Email</th>
        </tr>
        {ContactsData.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.nom}</td>
            <td>{contact.prenom}</td>
            <td>{contact.Tel}</td>
            <td>{contact.email}</td>
          </tr>
        ))}
        <table />
      </div>
              <div>
          <div
            className={`tab ${activeTab === "onglet1" ? "active" : ""}`}
            onClick={() => handleTabClick("onglet1")}
            aria-hidden="true"
          >
            Liste des contacts
          </div>
          <div
            className={`tab ${activeTab === "onglet2" ? "active" : ""}`}
            onClick={openPopup}
            aria-hidden="true"
          >
            Ajouter un contact
          </div>
          <div
            className={`tab ${activeTab === "onglet3" ? "active" : ""}`}
            onClick={() => handleTabClick("onglet3")}
            aria-hidden="true"
          >
            Gestionnaire de catégorie
          </div>
          <div className="tab-content">
            {activeTab === "onglet1" && <List />}
            {activeTab === "onglet2" && <ContactForm />}
            {activeTab === "onglet3" && <p>Contenu de l'onglet 3</p>}
          </div>
        </div>
    </div>
  );
}

export default List;
