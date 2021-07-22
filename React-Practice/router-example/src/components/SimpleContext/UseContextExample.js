import React from 'react';
import {UserContext} from '../../App';
import {useContext} from 'react';


function UseContextExample() {

    const user = useContext(UserContext);

    return(
        <div>Hello World I am {user}</div>
    );
};

export default UseContextExample;