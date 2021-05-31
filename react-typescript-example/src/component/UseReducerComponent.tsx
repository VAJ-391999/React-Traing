import { count } from 'console';
import { useReducer } from 'react';

const initState = {
    counter: 100
};

type ACTIONTYPE = 
| {type: 'increment'; payload: number;}
| {type: 'decrement'; payload: number}

const reducer = (state: typeof initState = initState, action: ACTIONTYPE) => {
    switch(action.type) {
        case 'increment':
            return {...state, counter:  state.counter + action.payload }
        case 'decrement':
            return {...state, counter:  state.counter - action.payload }
        default:
            return state
    }
}

function TestUseReduer () {

   const[num, dispatch] = useReducer(reducer, initState);

    return (
        <div>
            <h1>{num.counter}</h1>
            <button onClick={() => dispatch({type: 'increment', payload: 1})}>Increment Counter</button>
            <button onClick={() => dispatch({type: 'decrement', payload: 1})}>Decrement Counter</button>
        </div>
    );
};

export default TestUseReduer;