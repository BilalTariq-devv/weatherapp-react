import React, { createContext, useState, useEffect } from 'react';

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {
    const [queryType, setQueryType] = useState('City Name');
    const [query, setQuery] = useState('Islamabad');
    const [data, setData] = useState(null);
    const [units, setUnits] = useState('metric');
    const API_KEY = 'c73aa228bfba692462f96e89080aa39a';

    useEffect(() => {
        const fetchData = async () => {
            try {
                let url = '';
                if (queryType === 'City Name') {
                    url = `https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=${units}&appid=${API_KEY}`;
                } else if (queryType === 'City ID') {
                    url = `https://api.openweathermap.org/data/2.5/forecast?id=${query}&units=${units}&appid=${API_KEY}`;
                } else if (queryType === 'Zip Code') {
                    url = `https://api.openweathermap.org/data/2.5/forecast?zip=${query}&units=${units}&appid=${API_KEY}`;
                }

                const response = await fetch(url);
                const detail = await response.json();
                setData(detail);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [query, queryType, units]);

    const handleSearch = (type, value) => {
        setQueryType(type);
        setQuery(value);
    };

    const toggleUnits = () => {
        setUnits((prevUnits) => (prevUnits === 'metric' ? 'imperial' : 'metric'));
    };

    return (
        <WeatherContext.Provider
            value={{ queryType, query, data, units, handleSearch, toggleUnits }}
        >
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContext;
