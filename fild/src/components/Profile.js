import React from 'react';
import'./UserProfile.css';
import {  } from "react-icons/ri";
import { Link } from 'react-router-dom';
import UserProfile from './UserProfile'; // Assurez-vous que le chemin est correct

function Profile() {
  return (
    <div className="Profile">
      <h1>Profil Utilisateur</h1>
      {/* Ajoutez ici des informations sur le profil */}
      <UserProfile />
      <div>
        <Link to="/">Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default Profile;