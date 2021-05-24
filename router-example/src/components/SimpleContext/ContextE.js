import React from 'react';
import {UserContext} from '../../App';

function ContextE() {
    return (
        <div>
            <UserContext.Consumer>
                {
                    user => {
                        return <div>Hello {user}</div>
                    }
                }
            </UserContext.Consumer>
        </div>
    );
};

export default ContextE;