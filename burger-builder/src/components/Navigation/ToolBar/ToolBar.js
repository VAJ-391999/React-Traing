import React from 'react';
import Logo from '../Logo/Logo';
import './ToolBar.css';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';



const toolbar = (props) => (
    <header className="ToolBar">
        <DrawerToggle clicked={props.drawerToggleClicked} />
        <div>
            <Logo />
        </div>
        <nav className="DesktopOnly">
            <NavigationItems />
        </nav>
    </header>
);

export default toolbar;