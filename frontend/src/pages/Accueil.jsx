import React from "react";
import "./Accueil.css";

function Accueil() {
  return (
    <div>
      <header>
        <img className="logo" src="/src/assets/logo.png" alt="logos" />
        <h1 className="Titre">Formulaire de Contact</h1>
      </header>
      <div className="Navbar">
        <a className="Navbar1" href="/InscriptionForm">
          S'inscrire
        </a>
        <a className="Navbar1" href="/ContactForm">
          Ma page de contact
        </a>
      </div>
      <p className="soustitre">
        Inscrivez-vous pour obtenir un espace privé et gérer vos contacts
      </p>

      <section className="presentation-section">
        <h2 className="petit_titre">Besoin de stocker vos contacts ?</h2>
        <h2 className="petit_titre">Notre site est fait pour vous !</h2>
        <p className="détail1">Ajout de contact facile ! </p>
        <p className="détail2">Un accès rapide à votre liste</p>
        <p className="détail3">Possibilité d'ajouter des catégories précises</p>
        <p className="détail4">
          Des champs et valeurs pour préciser la description de chaque contact
        </p>
      </section>

      <footer>
        <p>
          &copy; 2024 Mon Site de Formulaire de Contact. Tous droits réservés.
        </p>
      </footer>
    </div>
  );
}

export default Accueil;
