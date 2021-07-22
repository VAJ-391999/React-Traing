import React from 'react';
import logo  from '../../asserts/sunlogo.jpg';
import './Logo.css';

const Logo = () => {
    return (
        <div className="Logo">
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default Logo;