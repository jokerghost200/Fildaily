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

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderOnlyOnHome />
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
        </Routes>
      </div>
    </Router>
  );
};


export default App;