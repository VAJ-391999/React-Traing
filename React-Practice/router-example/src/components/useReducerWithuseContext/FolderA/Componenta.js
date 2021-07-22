import React, { useContext} from 'react';
import { counterContext } from '../../../App';

function ComponentA() {

    const counterContextValue = useContext(counterContext);

    return (
        <div>
            Component A
            <button onClick={() => counterContextValue.dispatch('increment')}>Increment</button>
            <button onClick={() => counterContextValue.dispatch('decrement')}>Decrement</button>
            <button onClick={() => counterContextValue.dispatch('reset')}>Reset</button>
        </div>
    );
};

export default ComponentA;