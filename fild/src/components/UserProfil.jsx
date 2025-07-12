import React from 'react';
import './UserProfile.css'; // Assurez-vous d'importer le fichier CSS

const UserProfile = () => {
  const user = {
    name: "Jean Dupont",
    email: "jean.dupont@example.com",
    phone: "0123456789",
    skills: ["JavaScript", "React", "Node.js"],
    experiences: [
      { title: "Développeur Frontend", company: "TechCorp", dates: "2020 - Présent", description: "Développement d'applications web." },
      { title: "Stagiaire", company: "WebSolutions", dates: "2019 - 2020", description: "Assistance dans le développement web." }
    ],
    education: [
      { degree: "Licence en Informatique", institution: "Université de Paris", year: 2018 }
    ],
    journalEntries: ["J'ai postulé à 5 emplois aujourd'hui.", "Réflexion sur mon entretien."]
  };

  return (
    <div className="user-profile-container">
      <div className="user-profile">
        <header className="user-header">
          <div className="profile-picture">
            <img src="./Assets/f2.jpg" alt="Profil de Jean Dupont" />
          </div>
          <div className="user-info">
            <h1>{user.name}</h1>
            <button className="logout-button">Déconnexion</button>
          </div>
        </header>
        <section>
          <h2>Informations Personnelles</h2>
          <p>Email: {user.email}</p>
          <p>Téléphone: {user.phone}</p>
        </section>
        <section>
          <h2>Compétences</h2>
          <ul>
            {user.skills.map(skill => <li key={skill}>{skill}</li>)}
          </ul>
        </section>
        <section>
          <h2>Expériences Professionnelles</h2>
          {user.experiences.map((exp, index) => (
            <div key={index}>
              <h3>{exp.title} chez {exp.company}</h3>
              <p>{exp.dates}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Éducation</h2>
          {user.education.map((edu, index) => (
            <div key={index}>
              <h3>{edu.degree}</h3>
              <p>{edu.institution} - {edu.year}</p>
            </div>
          ))}
        </section>
        <section>
          <h2>Journal</h2>
          <ul>
            {user.journalEntries.map((entry, index) => <li key={index}>{entry}</li>)}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default UserProfile;