import React, {useState} from 'react';

function HookCounterTow () {

    const initCount = 0;
    const [count, setCount] = useState(initCount);

    const increment5 = () => {
        
        for(let i = 0 ; i<5; i++) {
            setCount(prevState => prevState + 1);
        }
    
    }

    return (
        <div>increment5
            count: {count}
            <br />
            <button onClick={() => setCount(initCount)}>Reset</button>
            <button onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
            <button onClick={() => setCount(prevState => prevState - 1)}>Decrement</button>
            <button onClick={increment5}>Increment 5</button>
        </div>
    );
};

export default HookCounterTow; 