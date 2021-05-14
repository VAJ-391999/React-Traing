import React from 'react';
import Logo from '../Logo/Logo';
import './ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = () => (
    <header className="ToolBar">
        <div>
            <Logo />
           
        </div>
        <nav className="DesktopOnly">
        <NavigationItems />
        </nav>
    </header>
);

export default toolbar;