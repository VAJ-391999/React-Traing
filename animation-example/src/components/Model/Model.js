import React from 'react';
import './Model.css';
import Backdrop from '../Backdrop/Backdrop';

function Model(props) {
    return(
        
            <div className="test">
                <Backdrop></Backdrop>
                <div className="Model" style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',

                }}>
                <h1>Hello I am Model</h1>
                <button onClick={props.closeClicked}>Model Close</button>
                </div>
            </div>
        
    );
};

export default Model;