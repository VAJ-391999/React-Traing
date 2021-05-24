import React, {useState, useEffect} from 'react';

function HookIntervalCounter() {

    const[count, setCount] = useState(0);

    /* my code
    
    useEffect(() => {
        console.log('useEffect');
        tick();
    },[count])

    const tick = () => {
        console.log('tick called')
        setTimeout(setCount(count + 1), 1);
    }*/

    const tick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        const interval = setInterval(tick, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [count])

    return(
        <div>
            <h2>{count}</h2>
        </div>
    );
};

export default HookIntervalCounter;