import React, { useContext, useState } from 'react';
import WeatherContext from '../Context/WeatherContext';
import './Search.scss';


const Search = () => {
    const { handleSearch } = useContext(WeatherContext);
    const [queryType, setQueryType] = useState('City Name');
    const [query, setQuery] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (query) handleSearch(queryType, query);
    };

    return (
        <form className="search-container" onSubmit={handleSubmit}>
            <select
                value={queryType}
                onChange={(e) => setQueryType(e.target.value)}
                className="search-dropdown"
            >
                <option value="City Name">City Name</option>
                <option value="City ID">City ID</option>
                <option value="Zip Code">Zip Code</option>
            </select>
            <input
                type="text"
                placeholder={`Enter ${queryType}`}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
            />
            <button type="submit" className="search-button">Search</button>
        </form>
    );
};

export default Search;
