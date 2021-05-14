import React from 'react';
import './NavigationItem.css';
import { NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="NavigationItem">
        
            {props.children}
        
    </li>
)

export default navigationItem;