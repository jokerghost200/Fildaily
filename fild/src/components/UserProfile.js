import React from 'react';
import { Link } from 'react-router-dom';
import './UserProfile.css';
import UserProfil from './UserProfil'; // Assurez-vous que le chemin est correct

const UserProfile = () => {
  return (
    <div className="user-profile-container">
        <UserProfil />
        <Link to="/">Retour à l'accueil</Link>
    </div>
  );
};

export default UserProfile;