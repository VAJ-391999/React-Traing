import React from 'react';
import './NavigationItem.css';
import {BrowserRouter as Router,  NavLink } from 'react-router-dom';

const navigationItem = (props) => (
    <li className="NavigationItem">
    
        <NavLink to={props.link} activeClassName="active">
            {props.children}
        </NavLink>
    </li>
)

export default navigationItem;