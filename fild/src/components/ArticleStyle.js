 import React, { useState } from 'react';
import './Home.css'; // Assurez-vous d'importer le fichier CSS
import { Link } from 'react-router-dom';
import Bepc from './Assets/Bepc.webp'
import SAMUEL from './Assets/SAMUEL.jpg'
import SearchBar from './SearchBar'; // Assurez-vous que le chemin est correct

const articles = [
    {
        id: 1,
        title: 'Cameroun: les premiers résultats du BEPC et du CAP session 2025 sont disponibles.',
        description: <p>La publication de ces résultats se fait de manière progressive depuis ce samedi 05 juillet 2025. Les candidats au Brevet…<br/><br/>

Publié par Arnaud MAWEL le: 6 juillet 2025 <br/><br/>
    

La publication de ces résultats se fait de manière progressive depuis ce samedi 05 juillet 2025.<br/>

Les candidats au Brevet d’études du premier cycle (Bepc) ainsi que leurs parents sont fixés sur leur sort au fur et à mesure que les résultats dudit examen officiel sont rendus publics. Le signal est donné dans la région de l’Ouest depuis ce matin où les responsables ont bouclé le processus de correction, de délibération et d’établissement des listes des admis.<br/><br/>


Dans l’ensemble de la région, le BEPC ordinaire a enregistré 31 151 inscrits. 30 899 candidats ont répondu présent aux épreuves écrites. 252 étaient absents. 21 069 candidats sont déclarés admis pour un taux de réussite de 68,19%. Un taux en hausse par rapport à celui de 2024 où la région a enregistré un taux de réussite de 61,26%.<br/>

Au BEPC bilingue, la région a enregistré 532 candidats dont 161 garçons et 371 filles. 528 candidats ont répondu présent lors des épreuves écrites et quatre étaient absents. Au bout du processus, 472 candidats dont 262 garçons et 210 filles sont déclarés admis. Le taux de réussite est de 89,39%. Ce taux est aussi en augmentation comparé à celui de 2024 qui est de 83,78%.<br/>

Les résultats du Certificat d’Aptitude Professionnel sont aussi disponibles dans la région de l’Ouest. Au CAP STT, 2 774 candidats ont été inscrits. 2 745 candidats ont composé et 2 065 sont déclarés admis. Le taux de réussite est de 75,23% contre 67,17% en 2024. Le CAP Industriel quant à lui a enregistré 10 498 candidats au départ. 10 377 ont composé contre 120 absences. 9 347 candidats sont déclarés admis pour un taux de réussite de 90,07% contre 88,54% en 2024.<br/>

 Suivez l'information en direct sur notre chaîne <a href="https://www.whatsapp.com/channel/0029Va5Yb9kFy72JeBjKoc0X" target="_blank" rel="noopener noreferrer"> WHATSAPP</a><br/><br/><br/><br/><br/><br/>'' </p>,
        image: Bepc,
},
    {
        id: 2,
        title: 'Mise en garde-diffamation-insultes : la Fécafoot promet des poursuites judiciaires',
        description: <p>Le Comité d’urgence de la Fédération camerounaise de football siffle la fin de la tolérance de la série de cabales dont la fédération et son président, Samuel Eto’o, sont victimes.<br/>
Le jeu de diffamation, de calomnie, et d’insultes contre les membres du Comité exécutif de la Fédération camerounaise de football et surtout à l’encontre de son président Samuel Eto’o a dépassé le seuil de l’acceptable. Le plaisir que prennent des personnes à discuter via les médias classiques et sociaux des documents obtenus par des mécanismes frauduleux, celui de parler sans en avoir la maitrise des sujets, de la gestion financière de la Fécafoot ont reçu le carton jaune du comité d’urgence : « Il est temps que cela cesse », préviennent les quatre vice-présidents de la Fécafoot dans une déclaration en date du 30 juin 2025.<br/><br/>

Désormais, les pourfendeurs des actions accomplies par la fédération livreront un match contre elle devant les cours et tribunaux compétents. « Des poursuites devant les instances compétentes vont désormais être engagées de façon systématique (…) Cette succession de cabales méticuleusement organisées et financées doit cesser. Chacune de ces personnes œuvrant pour la destruction du football devra désormais assumer ses actes, en toute responsabilité, devant la loi », martèle le Comité d’urgence.<br/><br/>

LA SUITE APRÈS LA PUBLICITÉ<br/><br/>



L’organe de la fédération exprime son indignation face aux analyses ciblées et dérives observées sur des critiques faites à l’encontre de la Fédération camerounaise de football au sujet de la gestion des fonds liés à l’organisation du match amical Cameroun-Russie du 12 novembre 2023 à Moscou. S’appuyant sur des documents largement partagés sur les réseaux sociaux, des personnes ont accusé le Comité exécutif de la Fédération et son président de détournement de fonds, de corruption. Un membre dudit comité, Guibai Gatama, a saisi la commission d’éthique d’une plainte.<br/>

Face aux différentes sorties, analyses et critiques, le comité d’urgence explique tient à lever la polémique. Ses membres expliquent ls décisions pratiques relatives aux entrées d’argent et son utilisation « ont été prises par l’ensemble des vice-présidents lors des comités d’urgences et après analyse des différentes situations avec toujours à l’esprit la protection des intérêts de la Fédération et l’émission des mandats nécessaires pour respecter les textes et règlements de notre associations ».<br/>

Le comité d’urgence rappelle que la gestion financière à la fédération fait l’objet d’audit régulier. Et par conséquent ne saurait accepter les excès ayant pour prétexte l’amour pour le football. Car, « Aucune passion ne saurait expliquer les attaques visant à salir l’honorabilité des personnes, le recours à l’insulte et à la calomnie ». Il reste à observer si les détracteurs du comité exécutif vont reculer ou alors maintenir l’offensive face à ce qu’ils pourront considérer comme intimidation.<br/>

 Suivez l'information en direct sur notre chaîne WHATSAPP<br/><br/><br/><br/>'</p>,
        image: SAMUEL,
    },
    {
        id: 3,
        title: 'Voici pourquoi les élites du nord de tout bord ont peur de Kamto Analyse.',
        description: <p>L’élite du Nord ont une peur et aversion pathologique de Kamto qu’ils transmettent aux populaire et à la jeunesse. Cette peur se justifie par leur incapacité à faire face à leur propre survie, car tous semblent incapables de vivre sans s’accrocher au gouvernement et ses privilèges, et se croient incapables d’opposer un opposant politique, économique et intellectuel par paresse intellectuel, amour de la facilité. À cela s’ajoute un humaniste limité à la lumière de que ces élites font subir à leurs populaire et même congénères.</p>,
        image: 'image3.jpg',
    },
    {
        id: 4,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },    
    {
        id: 5,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 6,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 7,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 7,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 8,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 9,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },
    {
        id: 10,
        title: 'Article 3',
        description: 'Description de l\'article 3.',
        image: 'image3.jpg',
    },    
    
];

const JournalPage = () => {
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [searchQuery, setSearchQuery] = useState(''); // État pour la recherche

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
