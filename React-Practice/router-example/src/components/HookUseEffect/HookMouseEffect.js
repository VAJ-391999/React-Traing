import React, {useEffect, UseEffect, useState} from 'react';

function HookMouseEffect() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    const logMousePostion = (e) => {
        console.log('Mouse event');
        setX(e.clientX)
        setY(e.clientY )
    }

    useEffect(()=> {
        console.log('useEffetc Called');
        window.addEventListener('mousemove', logMousePostion)

        return() => {
            console.log('Component unmount');
            window.removeEventListener('mousemove', logMousePostion);
        }
    }, [])

    return (
        <div>
            Hook X = {x} <br/>
            Y= {y}
        </div>
    );
};

export default HookMouseEffect;