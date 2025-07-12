import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
    const handleSearch = (event) => {
        setSearchQuery(event.target.value); // Met à jour la requête de recherche
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder="Rechercher des articles..."
                onChange={handleSearch}
                className="search-input" // Classe CSS pour le style
                style={{ display: 'block', width: '100%', padding: '10px', border: '1px solid #ccc' }} // Styles en ligne pour le diagnostic
            />
        </div>
    );
};

export default SearchBar;