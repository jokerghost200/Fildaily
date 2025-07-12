 import React, { useState } from 'react';
import './Info.css'; // Assurez-vous d'importer le fichier CSS
import Assistance_de_Direction from './Assets/Assistance_de_Direction.png';
import Assistante_Marketing_Bilingue from './Assets/Assistante_Marketing_Bilingue.png';
import Développeur_Java_Fullstack from './Assets/Développeur_Java_Fullstack.jpg';
import Electronicien_Engins_Lourds from './Assets/Electronicien_Engins_Lourds.jpg';
import Field_Officer from './Assets/Field_Officer.png';
import Pharmacien_Grossiste from './Assets/Pharmacien_Grossiste.jpg'
import Ressources_Humaines from './Assets/Ressources_Humaines.png';
import Serveu from './Assets/Serveu.jpg'
import Superviseur_des_Promoteurs_en_Electroménager from './Assets/Superviseur_des_Promoteurs_en_Electroménager.png'
import { Link } from 'react-router-dom';
import MenuDeroulant from './MenuDeroulant';
import SearchBar from './SearchBar';


const articles = [
    {
        id: 1,
        title: 'Électronicien Engins Lourds (H/F) - Douala',
        description: <p className='I-par'>Description du poste<br/>
AURE RH Recruitment Services Sarl, Membre de AREKO GROUP, recrute pour un de ses clients du secteur de l’automobile, Un(e) Électronicien.e Engins Lourds<br/><br/>

Mission principale :

Diagnostiquer, entretenir et réparer les systèmes mécaniques, électriques et électroniques des véhicules poids lourds. Assurer le bon fonctionnement des composants électroniques embarqués pour garantir sécurité, conformité et fiabilité de la flotte.<br/><br/>

Responsabilités :<br/><br/>
• Diagnostiquer les pannes électroniques à l’aide d’outils spécifiques (multimètres, valises de diagnostic, logiciels constructeurs, etc.) ;<br/>
• Lire et interpréter les schémas électriques et électroniques des engins, en identifiant les composants défectueux ;<br/>
• Effectuer les réparations nécessaires : remplacement ou réparation des calculateurs, capteurs, faisceaux électriques, boîtiers de commande, connecteurs, batteries, alternateurs, démarreurs, etc ;<br/>
• Assurer la maintenance préventive des systèmes électriques et électroniques conformément aux recommandations des constructeurs ;<br/>
• Mettre à jour les logiciels embarqués et effectuer les calibrages nécessaires après intervention ;
• Installer et configurer des équipements électroniques additionnels, tels que des caméras, systèmes GPS, dispositifs de télémétrie ou systèmes de contrôle à distance ;<br/>
• Documenter les interventions dans les fiches de maintenance ou la GMAO (gestion de maintenance assistée par ordinateur) ;<br/>
• Respecter strictement les consignes de sécurité, les procédures internes et les normes en vigueur lors de chaque intervention ;<br/>
• Collaborer avec les techniciens mécaniciens et hydrauliciens pour les interventions multidisciplinaires ;<br/>
• Former ou accompagner les opérateurs et conducteurs d’engins sur l’usage optimal et l’entretien des dispositifs électroniques.<br/><br/><br/></p>,
        image: Electronicien_Engins_Lourds,
    },
    {
        id: 2,
        title: 'Stage Pré Embauche Assistance de Direction - Douala',
        description: <p>  Description du poste<br/><br/>
Nous sommes une Startup qui cherchons à renforcer notre équipe en recrutant un(e) Assistant(e) de Direction dynamique et talentueux(se) pour jouer un rôle clé dans notre croissance.Si tu es une personne jeune, autonome, disciplinée, organisée et rigoureuse. D’autre part, qui adore le travail d’équipe et travailler dans un environnement dynamique, alors ce poste est fait pour toi.<br/><br/>

Missions :<br/><br/>

En tant que Assistant(e) de Direction, vous aurez les responsabilités qui suivent :<br/>
• Assumer les tâches administratives et de direction afin d’optimiser les procédures de flux de travail<br/>
• Assister ses collègues et les cadres en les aidant à planifier et à diffuser des informations<br/>
• Être le point de référence pour toutes les questions, requêtes ou problèmes et fera partie intégrante des effectifs de la société.<br/>
• Servir d'interface entre la direction et le personnel<br/>
• Gestion des stocks et de certains fournisseurs<br/>
• Être l'interface entre la direction et et le Prestataire en charge de la comptabilité <br/><br/><br/> </p>,
        image: Assistance_de_Direction,
    },
    {
        id: 3,
        title: 'Assistante Marketing Bilingue - Douala',
        description: <p>Description du poste<br/><br/>
Nous sommes à la recherche d'une Assistante Marketing Bilingue.<br/><br/>

Missions :<br/><br/>
• Communiquer avec les clients par le biais d'articles en ligne, de médias sociaux, de courriels, de sites web et d'appels téléphoniques en anglais et en français<br/>
• Recevoir et interagir avec les clients a l’accueil en les orientant sur nos services.<br/>
• Gestion de la base de données des clients, effectuer des opérations sur notre plateforme en ligne, travailler avec un logiciel de gestion de la relation client (CRM)<br/>
• Développer des connexions et entretenir des relations avec des agences de marketing similaires.<br/>

Salaire :<br/><br/>
• Période d'essai de 02 mois. Si elle est concluante, un CDI vous sera proposé<br/>
• Le salaire d'essai durant les 02 mois est de 80 000 FRS par mois<br/>
• Le salaire permanent est de 130 000 FRS par mois.<br/><br/><br/></p>,
        image: Assistante_Marketing_Bilingue,
    },
    {
        id: 4,
        title: 'Ressources Humaines',
        description: <p>Description du poste<br/><br/>
Nous sommes à la recherche d'un Responsable des Ressources Humaines.<br/><br/>

Missions : <br/><br/>
• Élabore et propose à la direction générale une politique de gestion du personnel et de développement des ressources humaines.<br/>
• veille au respect des obligations légales en appliquant la réglementation relative au droit du travail et cherche à améliorer les conditions et l'organisation du travail. Il conçoit et organise des actions de communication interne, supervise la gestion de la paie, entretient des relations avec les partenaires sociaux (délégués du personnel, comité d'entreprise).<br/>
• veille au développement des compétences des salariés par l'évaluation, la formation et l'évolution de carrières. Le responsable RH accompagne tous les grands chantiers conduits par ses équipes, en leur apportant les outils et les appuis méthodologiques.<br/>
• met en œuvre les moyens quantitatifs et qualitatifs nécessaires à une optimisation ou à une adaptation des ressources humaines aux finalités économiques de l’entrepris<br/><br/><br/></p>,
    image: Ressources_Humaines,    
},
    {
        id: 5,
        title: 'Développeur(se) Full-Stack H/F - Douala',
        description: <p>Description du poste<br/>
FSLI recherche un(e) Développeur(se) Full-Stack pour travailler sur plusieurs projets variés. Ces projets impliquent l’utilisation des technologies modernes telles que React, React Native, Flutter, PHP Symfony, et nécessitent des connaissances en Python. Une expertise en création graphique (images, vidéos) serait un atout majeur.<br/>

Missions principales :<br/>
• Conception, développement, test et maintenance de sites web, applications web et interfaces utilisateurs.<br/>
• Identification et spécification des besoins fonctionnels et techniques.<br/>
• Intégration des chartes graphiques et des données.<br/>
• Gestion et remontée des bugs.<br/>
• Rédaction de la documentation technique.<br/>
• Maintenance et développement de nouvelles fonctionnalités sur des applications existantes.<br/>
• Analyse et traitement des données back-end.<br/>
• Participation au développement mobile avec des frameworks comme React Native et Flutter.<br/><br/><br/></p>,
        image: Développeur_Java_Fullstack,
    },
    {
        id: 6,
        title: 'Pharmacien Grossiste - Répartiteur',
        description: <p>Description du poste<br/><br/>
Importante structure grossiste basée à Douala recherche dans le cadre de son développement un Pharmacien H/F.<br/><br/>

Missions :<br/>
• La dispensation des médicaments ;<br/>
• Le conseil et l’accompagnement qui vont avec.<br/><br/><br/></p>,
        image: Pharmacien_Grossiste,
    },
    {
        id: 7,
        title: 'Développeur Java Fullstack - Douala',
        description: <p>Description du poste<br/><br/>
Dans le cadre du développement de ses activités, la société Olydis pay recherche de jeunes talents capables d'accompagner sa croissance et participer à la création de solutions technologiques innovantes.<br/><br/>

En tant que Développeur Java Fullstack au sein d’une équipe jeune et dynamique, vous serez sous la responsabilité d'un tech Lead et participeré aux développements de nouvelles fonctionnalités de la plateforme olydispay, immergé dans les pratiques agiles.<br/><br/>

Missions :<br/>
• Analyser les besoins Logiciels<br/>
• Rédiger les spécifications techniques<br/>
• Réaliser les développements<br/>
• Réaliser les tests unitaires<br/>
• Revue de code<br/>
• Avoir un rôle actif dans la capitalisation du savoir de la solution<br/>
• Participer activement à la maintenance technique<br/>
• Support technique suite aux incidents de production.<br/>

Stack Technique : Java, Angular, Spring, Hibernate, Docker, Jenkin, portainer, Bootstrap, API, web services, Git, MySQL.<br/><br/><br/></p>,
        image: Développeur_Java_Fullstack,
    },
    {
        id: 8,
        title: 'Field Officer - Douala - Kribi',
        description: <p>Description du poste<br/><br/>
Notre client, un acteur clé du secteur logistique et douanier, recherche un Field Officer basé à Douala et Kribi pour renforcer ses opérations.<br/>
Ce poste stratégique offre l’opportunité de superviser la gestion des entrepôts en zones douanières et de maîtriser les procédures import/export, aussi bien au niveau national que sous-régional (CEMAC).<br/>
Poste basé à Douala / Kribi.<br/><br/>

Responsabilités principales :<br/><br/>

Gestion Opérationnelle & Logistique :<br/>
• Superviser les activités d’entreposage et de stockage en zones douanières (Douala & Kribi).<br/>
• Garantir la conformité des flux de marchandises avec les réglementations douanières locales et CEMAC.<br/>
• Optimiser les processus de réception, stockage, expédition et distribution.<br/><br/>

Expertise Douanière & Commerce International :<br/>
• Appliquer avec précision les procédures douanières d’import/export (normes CEMAC).<br/>
• Vérifier l’intégrité des documents douaniers et assurer une traçabilité rigoureuse.<br/>
• Collaborer étroitement avec les autorités douanières et portuaires pour fluidifier les opérations.<br/><br/>

Coordination & Reporting :<br/>
• Servir de relais entre les équipes terrain, les prestataires (transporteurs, transitaires) et le siège.<br/>
• Produire des rapports détaillés sur l’avancement des opérations et les éventuels dysfonctionnements.<br/><br/><br/></p>,
        image: Field_Officer,
    },
    {
        id: 9,
        title: 'Serveur(e)',
        description: <p>Description du poste<br/><br/>
En tant qu'employé de notre société, vous collaborerez avec chaque départment afin de créer et déployer des produits disruptifs. Venez travailler dans une société en pleine croissance
qui vous offre de chouettes avantages, ainsi que des opportunités de progression et d'apprentissage aux côtés de leaders accomplis.<br/>
Nous recherchons un membre de notre équipe expérimenté.<br/><br/>

Cette position est à la fois créative et rigoureuse , vous devez pouvoir réfléchir hors des habitudes. Nous attendons du candidat d'être proactif et d'avoir un esprit de battant.<br/>
Pour y parvenir, vous aurez de solides compétences en résolution de problèmes.<br/><br/><br/><br/></p>,
        image: Serveu,
    },
    {
        id: 10,
        title: 'Superviseur des Promoteurs en Électroménager - Douala',
        description: <p>Description du poste<br/><br/>
Nous sommes à la recherche des Superviseurs des Promoteurs en Électroménager.<br/><br/>

Missions :<br/><br/>
• Superviseur des Promoteurs en Électroménager<br/>
• Assurer la formation sur les produits et leurs arguments de vente clés<br/>
• Surveiller et gérer la performance des promoteurs en magasin<br/>
• Coordonner et mettre en œuvre les activités promotionnelles en point de vente<br/>
• Réaliser des analyses du marché et du secteur<br/>
• Collecter des informations sur les prix et les stratégies marketing<br/>
• Proposer des améliorations pour les activités en magasin et les stratégies de vente<br/><br/><br/><br/></p>,
        image: Superviseur_des_Promoteurs_en_Electroménager,
    },
];

const JournalPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // Ajout de l'état pour la recherche

    const handleArticleClick = (article) => {
        setSelectedArticle(article);
    };

    // Nouvelle fonction pour normaliser (sans accents, sans casse)
    function normalizeString(str) {
        return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
    }

    const filteredArticles = articles.filter(article =>
        normalizeString(article.title).includes(normalizeString(searchQuery))
    );

    return (
        <div className='I-cont'>
            <header className="I-header2">
                <Link to="/" className="home-link-accueil">Retour à l'accueil</Link>
                <h1><Link to='/Chats'>Mon Journal</Link></h1>
            </header>
            <main>
            <div className="I-journal-container">
                <div className="I-details">
                    <div className="I-details-content">
                        {selectedArticle ? (
                            <>
                                <h2>{selectedArticle.title}</h2>
                                <img src={selectedArticle.image} alt={selectedArticle.title} />
                                <p>{selectedArticle.description}</p>
                                < MenuDeroulant/>
                            </>
                        ) : (
                            <p>Sélectionnez un article pour voir les détails ici.</p>
                        )}
                    </div>
                </div>
                <div className="I-sidebar">
                    <div className="search-container">
                        <SearchBar setSearchQuery={setSearchQuery} />
                    </div>
                    <h2>Articles</h2>
                    {filteredArticles.map((article) => (
                        <div
                            key={article.id}
                            className="I-article"
                            onClick={() => handleArticleClick(article)}
                        >
                          <img src={article.image} alt={article.title} className="I-article-image" />
                            <h3>{article.title}</h3>
                        </div>
                    ))}
                </div>
            </div>
            </main>
        </div>
    );
};

export default JournalPage;
