import React from 'react';
import './Button.scss';

const Button = ({ onClick, children, style }) => {
    return (
        <button className="button" onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;