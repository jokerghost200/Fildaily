import React from 'react';
import {  } from "react-icons/ri";
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginForm/LoginPage';
import Home from './components/Home';
import Info from './components/Info';
import Profile from './components/Profile';
import RegisterForm from './components/LoginForm/RegisterForm';
import ArticleJob from './components/ArticleJob';
import Footer from './components/Footer';
import ArticleStyle from './components/ArticleStyle'; 
import Chats from './components/Chats';
import MenuDeroulant from './components/MenuDeroulant';
import Favorites from './components/Favorites';

function HeaderOnlyOnHome() {

  const location = useLocation();
  if (location.pathname !== "/") return null;
  return (
    <div className='body-accueil'>
        <div className="header">
          <div>
            <div className="profile-picture2">
              <img src="url_vers_photo_profil.jpg" alt="Profil" />
            </div>
          </div>
            <div className="btn-accueil">
              <Link to="/Profile"><button>Profil</button></Link>
              <Link to="/Login"><button>Se connecter</button></Link>
            </div>
        </div>
      <span>
        <Link to="/Home"><button className='btn-accueil-b'>ActuZone</button></Link>
        <Link to="/ArticleJob"><button className='btn-accueil-b2'>JobZone</button></Link>
      </span>
    </div>
  );
}

// Composant pour les boutons flottants
function FloatingButtons() {
  const location = useLocation();
  
  // Ne pas afficher sur la page d'accueil
  if (location.pathname === "/") return null;

  return (
    <div className="floating-buttons">
      <Link to="/" className="floating-btn home-btn">
        <span>🏠</span>
        <span className="btn-tooltip">Accueil</span>
      </Link>
      <Link to="/Home" className="floating-btn actu-btn">
        <span>📰</span>
        <span className="btn-tooltip">ActuZone</span>
      </Link>
      <Link to="/ArticleJob" className="floating-btn job-btn">
        <span>💼</span>
        <span className="btn-tooltip">JobZone</span>
      </Link>
      <Link to="/Favorites" className="floating-btn favorites-btn">
        <span>❤️</span>
        <span className="btn-tooltip">Mes Favoris</span>
      </Link>
      <Link to="/Profile" className="floating-btn profile-btn">
        <span>👤</span>
        <span className="btn-tooltip">Profil</span>
      </Link>
      <Link to="/Chats" className="floating-btn chat-btn">
        <span>💬</span>
        <span className="btn-tooltip">Chats</span>
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderOnlyOnHome />
        <FloatingButtons />
        <Routes>
          <Route path="/Chats" element={<Chats />} />
          <Route path="/MenuDeroulant" element={<MenuDeroulant />} />
          <Route path="/ArticleJob" element={<ArticleJob />} />
          <Route path="/ArticleStyle" element={<ArticleStyle />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Info" element={<Info />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/LoginPage" element={<LoginPage />} />
          <Route path="/Footer" element={<Footer />} />
          <Route path="/Favorites" element={<Favorites />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;