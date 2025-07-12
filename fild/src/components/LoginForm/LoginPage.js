import React from 'react';
import LoginForm from './LoginForm.jsx'; // Assurez-vous que le chemin est correct
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div clssName='body'>
     <div className='login-page'>
      <LoginForm />
      <div>
      <Link to="/" className='ty'>
        Retour à l'accueil
      </Link>
      </div>
     </div>
    </div>
    
  );
};

export default LoginPage;

