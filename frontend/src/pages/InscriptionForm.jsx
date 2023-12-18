import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Inscription.css";

function InscriptionForm() {
  const [utilisateur, setUtilisateur] = useState({
    nom: "",
    prenom: "",
    email: "",
    mot_de_passe: "",
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

    // Envoyer les données au serveur backend
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/signup`, utilisateur)
      .then((response) => {
        console.info(response.data);
      })
      .catch((error) => {
        console.error("Pas de réponse du serveur :", error.request);
      });
  };

  return (
    <div className="body">
      <h1 className="titreContact">Votre annuaire privé</h1>
      <h2 className="phraseContact">
        Un accès facile à tous vos contacts en un seul clic
      </h2>
      <p className="sign">Inscrivez-vous pour obtenir votre page privée </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nom">Nom :</label> <br />
        <input
          className="taille"
          type="text"
          id="nom"
          name="nom"
          value={utilisateur.nom}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="prenom">Prénom :</label> <br />
        <input
          className="taille"
          type="text"
          id="prenom"
          name="prenom"
          value={utilisateur.prenom}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="email">Email :</label> <br />
        <input
          className="taille"
          type="email"
          id="email"
          name="email"
          value={utilisateur.email}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <label htmlFor="mot_de_passe">Mot de passe :</label> <br />
        <input
          className="taille"
          type="password"
          id="mot_de_passe"
          name="mot_de_passe"
          value={utilisateur.mot_de_passe}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input type="submit" className="signup" value="S'inscrire" />
      </form>
      <Link to="/">
        <h1>Retour à l'accueil</h1>
      </Link>
    </div>
  );
}

export default InscriptionForm;
