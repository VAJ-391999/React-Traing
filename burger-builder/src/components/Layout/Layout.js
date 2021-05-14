import React from 'react';
import Aux from '../../hoc/Aux1';
import './Layout.css';
import ToolBar from '../Navigation/ToolBar/ToolBar';

const layout = (props) => (
    <Aux>
        <ToolBar />
        <main className="Content">
            {props.children}
        </main>
    </Aux>
);

export default layout;