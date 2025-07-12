import React, { useEffect, useState } from 'react';
import './Foote.css'; // Assurez-vous que le chemin est correct


function Footer() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000); // Met à jour chaque seconde
    return () => clearInterval(interval); // Nettoie l'intervalle
  }, []);

  return (
    <footer className="animated-footer" style={{ textAlign: 'center', padding: '10px', backgroundColor: '#222', color: '#fff' }}>
      <p className="time-display">{dateTime.toLocaleDateString()} - {dateTime.toLocaleTimeString()}</p>
    </footer>
  );
}

export default Footer;
