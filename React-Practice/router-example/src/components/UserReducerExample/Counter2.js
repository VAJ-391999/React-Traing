import React, { useReducer } from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}
const reducer = (state, action) => {
    switch(action.type) {
        case 'increment':
            return { ...state, firstCounter: state.firstCounter + action.value};
        case 'increment2':
            return { ...state, secondCounter: state.secondCounter + action.value};
        case 'decrement':
            return {...state, firstCounter:  state.firstCounter - action.value};
        case 'decrement2':
            return {...state, secondCounter:  state.secondCounter - action.value};
        case 'reset':
            return initialState;
        default:
            return state;
    }
}

function Counter2() {

   const[count, dispatch] = useReducer(reducer, initialState);

    return(
        <div>
            <h1>useReducer basic example with object Count = {count.firstCounter}</h1>
            <h1>useReducer basic example with object Count2 = {count.secondCounter}</h1>
            <button onClick={() => dispatch({type: 'increment', value: 1})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement', value: 1})}>Decrement</button>
            <button onClick={() => dispatch({type: 'increment2', value: 1})}>Increment 1 into SecondCounter</button>
            <button onClick={() => dispatch({type: 'decrement2', value: 1})}>Decrement 1 into SecondCounter</button>
            <button onClick={() => dispatch({type: 'reset'})}>Reset</button>

        </div>
    );
};

export default Counter2;