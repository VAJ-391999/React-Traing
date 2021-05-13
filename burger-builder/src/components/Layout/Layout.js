import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';

const layout = (props) => (
    <Aux>
        <div>Toolbar, SideBar, Backdrop</div>
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;