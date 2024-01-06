import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Contact.css";

function InscriptionForm() {
  const [utilisateur, setUtilisateur] = useState({
    nom: "",
    prenom: "",
    email: "",
    mdp: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur((prevUtilisateur) => ({
      ...prevUtilisateur,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, utilisateur)
      .then((response) => {
        sessionStorage.setItem("userData", JSON.stringify(response.data));
        console.info(response.data);
      })
      .catch((error) => {
        console.error("Pas de réponse du serveur :", error.request);
      });
  };

  return (
    <div className="formulaire">
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label>
        <input
          className="taille"
          type="text"
          id="nom"
          name="nom"
          value={utilisateur.nom}
          onChange={handleChange}
          required
        />
        <label htmlFor="prenom">Prénom :</label>
        <input
          className="taille"
          type="text"
          id="prenom"
          name="prenom"
          value={utilisateur.prenom}
          onChange={handleChange}
          required
        />
        <label htmlFor="email">Email :</label>
        <input
          className="taille"
          type="email"
          id="email"
          name="email"
          value={utilisateur.email}
          onChange={handleChange}
          required
        />
        <label htmlFor="mdp">Mot de passe :</label>
        <input
          className="taille"
          type="password"
          id="mdp"
          name="mdp"
          value={utilisateur.mdp}
          onChange={handleChange}
          required
        />
        <button type="submit" className="ajouter">
          S'inscrire
        </button>
      </form>
      <p>Vous avez déja un compte ?</p>
      <button type="button" className="inscription-button">
        Se connecter
      </button>
    </div>
  );
}

export default InscriptionForm;
