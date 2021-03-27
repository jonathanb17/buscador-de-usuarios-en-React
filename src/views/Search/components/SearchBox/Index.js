import React, { useState } from 'react'

import './styles.css';

const SearchBox = ({ onSearch, onClose, isSearching }) => {
    const [searchText, setSearchText] = useState("");


    const handleSearchClick = () => {
        onClose();
        setSearchText(""); //limpiamos el input
    }


    return (
        <div className="search-box">
            <h3 className="search-box-title">Buscador de Personal</h3>
            <div className="search-box-buttons">
                <label>
                    <input type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="search-box-input"
                    />
                </label>
                <button onClick={() => onSearch(searchText)} disabled={!searchText.length}>Buscar</button>
                {isSearching && <button onClick={handleSearchClick} disabled={!searchText.length}>Cerrar</button>}
            </div>
        </div>
    )
}

export default SearchBox
