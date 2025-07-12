import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css' // Importez votre fichier CSS
import { RiMenuFold2Fill } from "react-icons/ri";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={toggleMenu} className="dropdown-icon">
        <RiMenuFold2Fill />
      </button>
      {isOpen && (
        <nav className="dropdown-menu">
          <ul>
            <li><Link to="/Chats">Contact</Link></li>
          </ul>
        </nav>
      )}
    </div>
  );
};

export default DropdownMenu;