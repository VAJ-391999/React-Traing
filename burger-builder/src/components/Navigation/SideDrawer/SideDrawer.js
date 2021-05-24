import React from 'react';
import Logo from '../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import './SideDrawer.css';
import Backdrop from '../../../components/UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux1';

const sideDrawer = (props) => {
    let attachedClasses = ["SideDrawer","Close"];

    if(props.opend) {
        attachedClasses = ["SideDrawer", "Open"];
    }

    return (
        <Aux>
            <Backdrop show={props.opend} clicked={props.closed} />
                <div className={attachedClasses.join(' ')} onClick={props.closed}>
                    <Logo />
                    <nav>
                        <NavigationItems isAuthenticated={props.isAuth}/>
                    </nav>
                </div>
            
        </Aux>
    );
};

export default sideDrawer;