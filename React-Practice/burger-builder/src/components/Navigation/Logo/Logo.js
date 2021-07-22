import React from 'react';
import burgerLogo from '../../../asserts/burger-logo.png';
import './Logo.css';

const logo = () => (
    <div className="Logo">
        <img src={burgerLogo} alt="My burger"/>
    </div>
);

export default logo;