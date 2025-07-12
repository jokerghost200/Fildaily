import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Info.css';

const Favorites = () => {
    const [actuzoneFavorites, setActuzoneFavorites] = useState([]);
    const [jobzoneFavorites, setJobzoneFavorites] = useState([]);
    const [activeTab, setActiveTab] = useState('articles'); // 'articles' ou 'jobs'
    const navigate = useNavigate();

    useEffect(() => {
        // Charger les favoris ActuZone
        const savedActuzoneFavorites = localStorage.getItem('actuzone_favorites');
        if (savedActuzoneFavorites) {
            setActuzoneFavorites(JSON.parse(savedActuzoneFavorites));
        }

        // Charger les favoris JobZone
        const savedJobzoneFavorites = localStorage.getItem('jobzone_favorites');
        if (savedJobzoneFavorites) {
            setJobzoneFavorites(JSON.parse(savedJobzoneFavorites));
        }
    }, []);

    const removeFavorite = (id, type) => {
        if (type === 'article') {
            const updatedFavorites = actuzoneFavorites.filter(fav => fav.id !== id);
            setActuzoneFavorites(updatedFavorites);
            localStorage.setItem('actuzone_favorites', JSON.stringify(updatedFavorites));
        } else if (type === 'job') {
            const updatedFavorites = jobzoneFavorites.filter(fav => fav.id !== id);
            setJobzoneFavorites(updatedFavorites);
            localStorage.setItem('jobzone_favorites', JSON.stringify(updatedFavorites));
        }
    };

    // Fonction pour naviguer vers ActuZone avec l'article sélectionné
    const goToArticle = (articleId) => {
        // Sauvegarder l'article sélectionné dans localStorage
        localStorage.setItem('selected_article_id', articleId);
        navigate('/Home');
    };

    // Fonction pour naviguer vers les messages
    const goToMessages = () => {
        navigate('/Chats');
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('fr-FR', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    return (
        <div className='I-cont'>
            <header className="I-header2">
                <Link to="/" className="home-link-accueil">Retour à l'accueil</Link>
                <h1>Mes Favoris</h1>
            </header>
            <main>
                <div className="favorites-container">
                    <div className="favorites-tabs">
                        <button 
                            className={`tab-btn ${activeTab === 'articles' ? 'active' : ''}`}
                            onClick={() => setActiveTab('articles')}
                        >
                            📰 Articles ({actuzoneFavorites.length})
                        </button>
                        <button 
                            className={`tab-btn ${activeTab === 'jobs' ? 'active' : ''}`}
                            onClick={() => setActiveTab('jobs')}
                        >
                            💼 Emplois ({jobzoneFavorites.length})
                        </button>
                    </div>

                    <div className="favorites-content">
                        {activeTab === 'articles' ? (
                            <div className="favorites-section">
                                <h2>Articles Favoris</h2>
                                {actuzoneFavorites.length === 0 ? (
                                    <p className="no-favorites">Aucun article en favori</p>
                                ) : (
                                    <div className="favorites-grid">
                                        {actuzoneFavorites.map((favorite) => (
                                            <div key={favorite.id} className="favorite-item">
                                                <div className="favorite-header">
                                                    <h3>{favorite.title}</h3>
                                                    <button 
                                                        className="remove-favorite-btn"
                                                        onClick={() => removeFavorite(favorite.id, 'article')}
                                                        title="Retirer des favoris"
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                                <img 
                                                    src={favorite.image} 
                                                    alt={favorite.title} 
                                                    className="favorite-image"
                                                    onClick={() => goToArticle(favorite.id)}
                                                    style={{ cursor: 'pointer' }}
                                                />
                                                <p className="favorite-date">
                                                    Ajouté le {formatDate(favorite.dateAdded)}
                                                </p>
                                                <button 
                                                    className="view-article-btn"
                                                    onClick={() => goToArticle(favorite.id)}
                                                >
                                                    📖 Voir l'article
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="favorites-section">
                                <h2>Emplois Favoris</h2>
                                {jobzoneFavorites.length === 0 ? (
                                    <p className="no-favorites">Aucun emploi en favori</p>
                                ) : (
                                    <div className="favorites-grid">
                                        {jobzoneFavorites.map((favorite) => (
                                            <div key={favorite.id} className="favorite-item">
                                                <div className="favorite-header">
                                                    <h3>{favorite.title}</h3>
                                                    <button 
                                                        className="remove-favorite-btn"
                                                        onClick={() => removeFavorite(favorite.id, 'job')}
                                                        title="Retirer des favoris"
                                                    >
                                                        ❌
                                                    </button>
                                                </div>
                                                <img src={favorite.image} alt={favorite.title} className="favorite-image" />
                                                <p className="favorite-date">
                                                    Ajouté le {formatDate(favorite.dateAdded)}
                                                </p>
                                                <button 
                                                    className="contact-btn"
                                                    onClick={goToMessages}
                                                >
                                                    💬 Contacter
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Favorites; 