import React from 'react';
import './Card.scss';

const Card = ({ day, temp, weather, icon }) => {
    return (
        <div className="card">
            <h3>{day}</h3>
            <img src={icon} alt={weather} />
            <p>{weather}</p>
            <p>{temp}</p>
        </div>
    );
};

export default Card;