import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/Auth";
import "./Contact.css";
import { useNavigate } from "react-router-dom";

function Connexion() {
  const { connected, setConnected } = useContext(AuthContext);
  const navigate = useNavigate();
  const [utilisateur, setUtilisateur] = useState({
    email: "",
    mdp: "",
  });

  // const [userDataFromSession, setUserDataFromSession] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUtilisateur((prevUtilisateur) => ({
      ...prevUtilisateur,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Appeler l'API backend pour récupérer l'utilisateur
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/api/login`, utilisateur)
      .then((response) => {
        console.info(response.data);
        setConnected(response.data);
        setTimeout(() => {
          navigate("/mon-espace/list");
        }, 1000);
      })
      .catch((error) => {
        console.error("Erreur lors de la connexion", error);
        setUtilisateur(utilisateur);
      });
  };

  /*
  useEffect(() => {
    const userData = sessionStorage.getItem("userData");
    setUserDataFromSession(userData ? JSON.parse(userData) : null);
  }, []); // Pas de dépendance, car cela ne devrait être exécuté qu'une fois au montage

  /*
  useEffect(() => {
    if (userDataFromSession && userDataFromSession.id) {
      axios
        .get(
          `${import.meta.env.VITE_BACKEND_URL}/api/user/${
            userDataFromSession.id
          }`
        )
        .then((response) => {
          setUserName(response.data.nom);
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération du nom :", error);
        });
    }
  }, [userDataFromSession]); // Dépendance uniquement sur userDataFromSession
  */

  return (
    <div className="formulaire">
      <h1>Connexion</h1>
      {console.log(connected)}
      <form onSubmit={handleSubmit}>
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
          Se connecter
        </button>
      </form>
      <p>Vous n'avez pas de compte ?</p>
      <button type="button" className="inscription-button">
        Créer un compte
      </button>
    </div>
  );
}

export default Connexion;
